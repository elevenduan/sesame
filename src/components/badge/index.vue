<template>
  <span :class="badgeCls">
    <slot></slot>
    <sup v-if="textN||dot" :class="scrollNumberCls" :style="badgeStyle">{{textN}}</sup>
  </span>
</template>
<script>
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'am-badge'
    },
    size: {
      type: String,
      default: 'small',
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1
      }
    },
    overflowCount: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    corner: {
      type: Boolean,
      default: false
    },
    hot: {
      type: Boolean,
      default: false
    },
    text: {
      type: [String, Number]
    },
    badgeStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    badgeCls () {
      const { prefixCls, corner, hot, size, $slots: { default: children } } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-not-a-wrapper`]: !children,
        [`${prefixCls}-corner-wrapper`]: corner,
        [`${prefixCls}-hot`]: hot,
        [`${prefixCls}-corner-wrapper-large`]: corner && size === 'large'
      }
    },
    scrollNumberCls () {
      const { prefixCls, dot, size, corner } = this
      return {
        [`${prefixCls}-dot`]: dot,
        [`${prefixCls}-dot-large`]: dot && size === 'large',
        [`${prefixCls}-text`]: !dot && !corner,
        [`${prefixCls}-corner`]: corner,
        [`${prefixCls}-corner-large`]: corner && size === 'large'
      }
    },
    textN () {
      let { text, overflowCount, dot } = this
      text = typeof text === 'number' && text > overflowCount ? `${overflowCount}+` : text
      if (dot) {
        text = ''
      }
      return text
    }
  }
}
</script>
<style lang="less">
  @import '../style/index.less';

  .am-badge {
    position: relative;
    display: inline-block;
    line-height: @line-height-base;
    vertical-align: middle;

    &-text {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: absolute;
      top: -1 * @v-spacing-sm;
      height: @icon-size-xs;
      line-height: @icon-size-xs;
      min-width: @icon-size-xs / 2;
      border-radius: 2 * @v-spacing-sm;
      padding: 0 @h-spacing-sm;
      text-align: center;
      font-size: @font-size-caption-sm;
      color: @color-text-base-inverse;
      background-color: @brand-important;
      white-space: nowrap;
      transform: translateX(-45%);
      transform-origin: -10% center;
      z-index: 10;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", SimSun, sans-serif;

      a {
        color: @color-text-base-inverse;
      }

      p {
        margin: 0;
        padding: 0;
      }
    }

    &-hot &-text {
      background-color: #f96268;
    }

    &-dot {
      position: absolute;
      transform: translateX(-50%);
      transform-origin: 0 center;
      top: -2 * @border-width-lg;
      height: 0.5 * @link-button-font-size;
      width: 0.5 * @link-button-font-size;
      border-radius: 100%;
      background: @brand-important;
      z-index: 10;
      left: 100%;

      &-large {
        height: @link-button-font-size;
        width: @link-button-font-size;
      }
    }

    &-not-a-wrapper &-text,
    &-not-a-wrapper &-dot {
      top: auto;
      display: block;
      position: relative;
      transform: translateX(0);
    }

    &-corner {
      width: 5 * @link-button-font-size;
      padding: 0.5 * @link-button-font-size;
      position: absolute;
      right: -2 * @link-button-font-size;
      top: 0.5 * @link-button-font-size;
      background-color: @brand-important;
      color: @color-text-base-inverse;
      white-space: nowrap;
      transform: rotate(45deg);
      text-align: center;
      font-size: @font-size-subhead;

      &-wrapper {
        overflow: hidden;
      }
    }
  }
</style>
