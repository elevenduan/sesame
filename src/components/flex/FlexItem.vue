<template>
  <div :class="wrapCls">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'FlexItem',
  props: {
    prefixCls: {
      type: String,
      default: 'am-flexbox'
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls } = this
      return {
        [`${prefixCls}-item`]: true
      }
    }
  }
}
</script>
