<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-left`">
      <slot name="left"/>
    </div>
    <div :class="`${prefixCls}-title`">
      <slot name="title"/>
    </div>
    <div :class="`${prefixCls}-right`">
      <slot name="right"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prefixCls: {
      type: String,
      default: 'am-navbar'
    },
    mode: {
      type: String,
      default: 'dark',
      validator: function (value) {
        return ['dark', 'light'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, mode } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${mode}`]: mode
      }
    }
  }
}
</script>
<style lang="less">
  @import "../style/index.less";

  @navbar-height: 45 * @hd;
  @navbarPrefixCls: am-navbar;

  .@{navbarPrefixCls} {
    display: flex;
    align-items: center;
    height: @navbar-height;
    background-color: @brand-primary;
    color: @fill-base;

    &-left,
    &-title,
    &-right {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }

    &-left {
      padding-left: @h-spacing-lg;
      font-size: @link-button-font-size;

      &-icon {
        margin-right: @h-spacing-sm;
        display: inherit;
      }
    }

    &-title {
      justify-content: center;
      font-size: 18 * @hd;
      white-space: nowrap;
    }

    &-right {
      justify-content: flex-end;
      font-size: @link-button-font-size;
      margin-right: @h-spacing-lg;
    }

    &-light {
      background-color: @fill-base;
      color: @brand-primary;
    }

    &-light &-title {
      color: @color-text-base;
    }
  }
</style>
