<script>
  export default {
    data () {
      return {
        init: false
      }
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      onVisibleChange: {
        type: Function
      },
      placement: {
        type: String
      },
      mask: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
<style lang="less">
  @import "../style/index";
</style>
