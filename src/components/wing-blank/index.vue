<template>
  <div :class="wrapCls">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'WingBlank',
  props: {
    prefixCls: {
      type: String,
      default: 'am-wingblank'
    },
    size: {
      type: String,
      default: 'lg',
      validator: function (value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, size } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${size}`]: true
      }
    }
  }
}
</script>
<style lang="less">
  @import '../style/index.less';

  @wingblankPrefixCls: am-wingblank;

  .@{wingblankPrefixCls} {
    margin-left: @h-spacing-md;
    margin-right: @h-spacing-md;

    &&-sm {
      margin-left: @h-spacing-sm;
      margin-right: @h-spacing-sm;
    }

    &&-md {
      margin-left: @h-spacing-md;
      margin-right: @h-spacing-md;
    }

    &&-lg {
      margin-left: @h-spacing-lg;
      margin-right: @h-spacing-lg;
    }
  }
</style>
