<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-frame`">
      <div :class="`${prefixCls}-slider-list`" :style="listStyle" v-on="touchEvents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Slider from './slider'

  export default {
    Slider,
    data () {
      return {
        current: this.selected,
        sliderWidth: 0,
        sliderHeight: 0,
        sliderCount: 0,
        listMoveLeft: 0,
        listMoveTop: 0,
        sliderFirst: null,
        sliderLast: null,
        sliderTransition: {},
        defaultTransition: {'transition': 'transform .2s ease-out'},
        touchEvents: this.getTouchEvents()
      }
    },
    props: {
      prefixCls: {
        type: String,
        default: 'am-carousel'
      },
      selected: {
        type: Number,
        default: 1
      },
      dots: {
        type: Boolean,
        default: true
      },
      vertical: {
        type: Boolean,
        default: false
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      interval: {
        type: Number,
        default: 3000
      },
      onChange: {
        type: Function
      }
    },
    computed: {
      wrapCls () {
        let {prefixCls, vertical} = this
        return {
          [prefixCls]: true,
          [`${prefixCls}-vertical`]: vertical
        }
      },
      listWidth () {
        let {sliderWidth, sliderCount, vertical} = this
        return vertical ? sliderWidth : sliderWidth * sliderCount
      },
      listHeight () {
        let {sliderHeight, sliderCount, vertical} = this
        return vertical ? sliderHeight * sliderCount : sliderHeight
      },
      listTranslate () {
        let {sliderWidth, sliderHeight, listMoveLeft, listMoveTop, current, vertical} = this
        return vertical ? (-(current - 1) * sliderHeight + listMoveTop) : (-(current - 1) * sliderWidth + listMoveLeft)
      },
      listStyle () {
        let {listWidth, listHeight, listTranslate, vertical, sliderTransition} = this
        if (!listWidth || !listHeight) {
          return {}
        }
        return {
          width: `${listWidth}px`,
          height: `${listHeight}px`,
          transform: vertical ? `translate3d(0px, ${listTranslate}px, 0px)` : `translate3d(${listTranslate}px, 0px, 0px)`,
          ...sliderTransition
        }
      }
    },
    methods: {
      initSlider () {
        console.log(this)
        let sliderList = (this.$slots.default || [])
        let count = sliderList.length
        if (count <= 1) {
          return
        }
        let first = sliderList[0]
        let last = sliderList[count - 1]
        let width = first.elm.offsetWidth
        let height = first.elm.offsetHeight
        this.computedWHCount = 1
        if ((!width || !height) && this.computedWHCount++ < 100) {
          setTimeout(() => {
            this.init()
          }, 50)
        } else {
          if (this.current < 1) {
            this.current = 1
          } else if (this.current > count) {
            this.current = count
          }
          this.sliderWidth = width
          this.sliderHeight = height
          this.sliderCount = count
          this.sliderFirst = first
          this.sliderLast = last
        }
      },
      supportInfinite () {
        let {sliderWidth, sliderHeight, listWidth, listHeight, listTranslate, vertical, sliderFirst, sliderLast} = this
        if (!sliderFirst || !sliderLast) {
          return
        }
        if (vertical) {
          sliderLast.elm.style.top = ''
          sliderFirst.elm.style.top = ''
          if (listTranslate > 0) {
            sliderLast.elm.style.top = `${-listHeight}px`
          } else if (listTranslate < -(listHeight - sliderHeight)) {
            sliderFirst.elm.style.top = `${listHeight}px`
          }
        } else {
          sliderLast.elm.style.left = ''
          sliderFirst.elm.style.left = ''
          if (listTranslate > 0) {
            sliderLast.elm.style.left = `${-listWidth}px`
          } else if (listTranslate < -(listWidth - sliderWidth)) {
            sliderFirst.elm.style.left = `${listWidth}px`
          }
        }
      },
      getTouchEvents () {
        return {
          touchstart: e => {
            this.touchObject = {
              startX: e.touches[0].pageX,
              startY: e.touches[0].pageY
            }
          },
          touchmove: e => {
            let {vertical, touchObject: {startX, startY}} = this
            let {pageX, pageY} = e.touches[0]
            if (vertical) {
              this.listMoveTop = Math.round(pageY - startY)
            } else {
              this.listMoveLeft = Math.round(pageX - startX)
            }
            // this.sliderTransition = {}
            this.supportInfinite()
          },
          touchend: e => {
            this.handleSwipe(e)
          },
          touchcancel: e => {
            this.handleSwipe(e)
          }
        }
      },
      handleSwipe () {
        let {listMoveTop, listMoveLeft, sliderWidth, sliderHeight, sliderCount, vertical} = this
        let target = this.current
        if (vertical) {
          target += Math.round(-listMoveTop / sliderHeight)
          this.listMoveTop = 0
        } else {
          target += Math.round(-listMoveLeft / sliderWidth)
          this.listMoveLeft = 0
        }
        if (target < 1) {
          target = sliderCount
        } else if (target > sliderCount) {
          target = 1
        }
        this.current = target
        // this.sliderTransition = defaultTransition
        this.supportInfinite()
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initSlider()
      })
    }
  }
</script>
<style lang="less">
  @import '../style/index.less';

  @carouselPrefixCls: am-carousel;

  .@{carouselPrefixCls} {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    visibility: visible;
    &-frame {
      position: relative;
      display: block;
      overflow: hidden;
      height: auto;
      transform: translate3d(0px, 0px, 0px);
      box-sizing: border-box;
    }
    &-slider-list {
      position: relative;
      display: block;
      box-sizing: border-box;
      white-space: nowrap;
      cursor: inherit;
    }
    &-slider {
      position: relative;
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
