<template>
  <div :class="wrapCls"></div>
</template>
<script>
export default {
  name: 'WhiteSpace',
  props: {
    prefixCls: {
      type: String,
      default: 'am-whitespace'
    },
    size: {
      type: String,
      default: 'md',
      validator: function (value) {
        return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1
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

  @whitespacePrefixCls: am-whitespace;

  .@{whitespacePrefixCls} {
    &&-xs {
      height: @v-spacing-xs;
    }

    &&-sm {
      height: @v-spacing-sm;
    }

    &&-md {
      height: @v-spacing-md;
    }

    &&-lg {
      height: @v-spacing-lg;
    }

    &&-xl {
      height: @v-spacing-xl;
    }
  }
</style>
