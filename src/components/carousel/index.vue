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
        sliderWidth: 0,
        sliderHeight: 0,
        sliderCount: 0,
        listMoveLeft: 0,
        listMoveTop: 0,
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
        default: 2
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
      infinite: {
        type: Boolean,
        default: false
      },
      beforeChange: {
        type: Function
      },
      afterChange: {
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
      listStyle () {
        let {sliderWidth, sliderHeight, sliderCount, listMoveLeft, listMoveTop, selected, vertical} = this
        let translateLeft = -(selected - 1) * sliderWidth + listMoveLeft
        let translateTop = -(selected - 1) * sliderHeight + listMoveTop
        if (!sliderWidth || !sliderHeight) {
          return {}
        }
        return {
          width: `${vertical ? sliderWidth : sliderWidth * sliderCount}px`,
          height: `${vertical ? sliderHeight * sliderCount : sliderHeight}px`,
          transform: vertical ? `translate3d(0px, ${translateTop}px, 0px)` : `translate3d(${translateLeft}px, 0px, 0px)`
        }
      }
    },
    methods: {
      initSlider () {
        console.log(this)
        let sliderList = (this.$slots.default || [])
        let first = sliderList[0]
        let count = sliderList.length
        if (!count) {
          return
        }
        let width = first.elm.offsetWidth
        let height = first.elm.offsetHeight
        this.computedWHCount = 1
        if ((!width || !height) && this.computedWHCount++ < 100) {
          setTimeout(() => {
            this.init()
          }, 50)
        } else {
          this.sliderWidth = width
          this.sliderHeight = height
          this.sliderCount = count
        }
      },
      getTouchEvents () {
        return {
          touchstart: e => {
            console.log(e)
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
        // let {listMoveTop, listMoveLeft, sliderWidth, sliderHeight} = this

        // let slidesToShow = this.state.slidesToShow
        // if (this.props.slidesToScroll === 'auto') {
        //   slidesToShow = this.state.slidesToScroll
        // }
        //
        // if (this.touchObject.length > this.state.slideWidth / slidesToShow / 5) {
        //   if (this.touchObject.direction === 1) {
        //     if (
        //       this.state.currentSlide >= this.state.slideCount - slidesToShow &&
        //       !this.props.wrapAround
        //     ) {
        //       this.setState({easing: easing[this.props.edgeEasing]})
        //     } else {
        //       this.nextSlide()
        //     }
        //   } else if (this.touchObject.direction === -1) {
        //     if (this.state.currentSlide <= 0 && !this.props.wrapAround) {
        //       this.setState({easing: easing[this.props.edgeEasing]})
        //     } else {
        //       this.previousSlide()
        //     }
        //   }
        // } else {
        //   this.goToSlide(this.state.currentSlide)
        // }
        //
        // // wait for `handleClick` event before resetting clickDisabled
        // setTimeout(() => {
        //   this.clickDisabled = false
        // }, 0)
        // this.touchObject = {}
        //
        // this.setState({
        //   dragging: false
        // })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initSlider()
      })
    },
    updated () {
      // this.init()
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
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
