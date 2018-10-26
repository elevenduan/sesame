<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-frame`">
      <div :class="`${prefixCls}-slider-list`" :style="sliderListStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Slider from './slider'

  export default {
    Slider,
    components: {
      Slider
    },
    data () {
      return {
        firstSlider: null,
        sliderWidth: 0,
        sliderHeight: 0,
        sliderCount: 0,
        sliderListStyle: {}
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
      }
    },
    methods: {
      init () {
        let slider = (this.$slots.default || [])
        let first = slider[0]
        let count = slider.length
        let width = 0
        let height = 0
        if (first && first.elm) {
          width = first.elm.clientWidth
          height = first.elm.clientHeight
        }
        let style = {
          width: `${width * count}px`,
          height: `${height}px`,
          transfrom: `translate3d(${-(this.selected - 1) * width}px, 0px, 0px)`
        }
        this.firstSlider = first
        this.sliderWidth = width
        this.sliderHeight = height
        this.sliderCount = count
        this.sliderListStyle = style
      }
    },
    mounted () {
      setTimeout(() => {
        this.init()
        console.log(this.sliderListStyle)
      }, 10)
      // this.$nextTick(() => {
      //   this.init()
      //   console.log(this.sliderListStyle)
      // })
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
      /*transform: translate3d(-690px, 0px, 0px);*/
      position: relative;
      display: block;
      /*height: 184px;*/
      /*width: 1035px;*/
      cursor: inherit;
      box-sizing: border-box;
    }
    &-slider {
      display: inline-block;
      vertical-align: top;
    }
  }
</style>
