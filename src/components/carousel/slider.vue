<template>
  <div :class="wrapCls">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'am-carousel-slider'
      }
    },
    computed: {
      wrapCls () {
        let {prefixCls} = this
        return {
          [prefixCls]: true
        }
      }
    }
  }
</script>
