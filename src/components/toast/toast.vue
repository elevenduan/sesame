<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-notice`">
      <div :class="`${prefixCls}-notice-content`">
        <div :class="textCls">
          <Icon v-if="iconType" :type="iconType" size="lg"/>
          <div class="am-toast-text-info">{{content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'

export default {
  data () {
    return {
      visble: true
    }
  },
  props: {
    prefixCls: {
      type: String,
      default: 'am-toast'
    },
    transitionName: {
      type: String,
      default: 'am-fade'
    },
    mask: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info'
    },
    content: {
      type: String
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, mask, transitionName, visble } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-mask`]: mask,
        [`${prefixCls}-nomask`]: !mask,
        [`${transitionName}-enter`]: visble,
        [`${transitionName}-enter-active`]: visble,
        [`${transitionName}-leave`]: !visble,
        [`${transitionName}-leave-active`]: !visble
      }
    },
    textCls () {
      const { prefixCls, iconType } = this
      return {
        [`${prefixCls}-text`]: true,
        [`${prefixCls}-text-icon`]: iconType
      }
    },
    iconType () {
      const iconTypes = {
        info: '',
        loading: 'loading',
        success: 'success',
        fail: 'fail',
        offline: 'dislike'
      }
      return iconTypes[this.type]
    }
  },
  components: {
    Icon
  }
}
</script>
<style lang="less">
  @import "../style/index.less";

  @toastPrefixCls: am-toast;

  .@{toastPrefixCls} {
    position: fixed;
    z-index: @toast-zindex;
    font-size: @font-size-base;
    text-align: center;
    transform: translateZ(1px);

    &&-mask {
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .@{toastPrefixCls}-notice {
        max-width: 50%;
      }
    }

    &&-nomask {
      max-width: 50%;
      left: 50%;
      top: 50%;
      .@{toastPrefixCls}-notice {
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &-notice-content {
      .@{toastPrefixCls}-text {
        min-width: 60 * @hd;
        border-radius: @radius-sm;
        color: @color-text-base-inverse;
        background-color: @toast-fill;
        line-height: @line-height-paragraph;
        padding: @v-spacing-md @h-spacing-lg;

        &.@{toastPrefixCls}-text-icon {
          border-radius: @radius-md;
          padding: @v-spacing-lg @h-spacing-lg;

          .@{toastPrefixCls}-text-info {
            margin-top: @v-spacing-sm;
            word-break: break-all;
          }
        }
      }
    }
  }
</style>
