<template>
  <TouchFeedback :activeClassName="`${prefixCls}-active`" :disabled="disabled">
    <a :class="wrapCls">
      <Icon
        v-if="iconType"
        :type="iconType"
        :size="size === 'small' ? 'xxs' : 'md'"
        :class="`${prefixCls}-icon`"
      />
      <span><slot/></span>
    </a>
  </TouchFeedback>
</template>
<script>
import Icon from '../icon/index'
import TouchFeedback from '../touch-feedback/index'

export default {
  props: {
    prefixCls: {
      type: String,
      default: 'am-button'
    },
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'warning', 'ghost'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'large',
      validator: function (value) {
        return ['large', 'small'].indexOf(value) !== -1
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, type, size, inline, disabled, loading, iconType } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-primary`]: type === 'primary',
        [`${prefixCls}-ghost`]: type === 'ghost',
        [`${prefixCls}-warning`]: type === 'warning',
        [`${prefixCls}-small`]: size === 'small',
        [`${prefixCls}-inline`]: inline,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-icon`]: !!iconType
      }
    },
    iconType () {
      const { loading, icon } = this
      return loading ? 'loading' : icon
    }
  },
  components: {
    Icon,
    TouchFeedback
  }
}
</script>
<style lang="less">
  @import "../style/index.less";

  @buttonPrefixCls: am-button;

  .@{buttonPrefixCls} {
    // do not use width:100%, can not set margin
    display: block;
    outline: 0 none;
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    font-size: @button-font-size;
    height: @button-height;
    line-height: @button-height;

    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;

    // default
    color: @color-text-base;
    background-color: @fill-base;

    .hairline('all', @border-color-base, @radius-md);

    // Multiple buttons inline arranged, the last one border-right may not display
    &-borderfix {
      &:before {
        transform: scale(0.49) !important;
      }
    }

    &&-active {
      background-color: @fill-tap;
    }
    &&-disabled {
      color: fade(@color-text-base, 30%);
      opacity: 0.6;
    }

    &-primary {
      color: @color-text-base-inverse;
      background-color: @primary-button-fill;
      .hairline('all', @primary-button-fill, @radius-md);

      &.@{buttonPrefixCls}-active {
        color: fade(@color-text-base-inverse, 30%);
        background-color: @primary-button-fill-tap;
      }
      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base-inverse, 60%);
        opacity: 0.4;
      }
    }

    &-ghost {
      color: @ghost-button-color;
      background-color: transparent;
      .hairline('all', @ghost-button-color, @radius-md);

      &.@{buttonPrefixCls}-active {
        color: @ghost-button-fill-tap;
        background-color: transparent;
        .hairline('all', @ghost-button-fill-tap, @radius-md);
      }
      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base, 10%);
        .hairline('all', fade(@color-text-base, 10%), @radius-md);
        opacity: 1; // override default opacity: 0.6
      }
    }

    &-warning {
      color: @color-text-base-inverse;
      background-color: @warning-button-fill;

      &.@{buttonPrefixCls}-active {
        color: fade(@color-text-base-inverse, 30%);
        background-color: @warning-button-fill-tap;
      }
      &.@{buttonPrefixCls}-disabled {
        color: fade(@color-text-base-inverse, 60%);
        opacity: 0.4;
      }
    }

    &-inline {
      display: inline-block;
      padding: 0 @h-spacing-lg;
    }

    &-small {
      font-size: @button-font-size-sm;
      height: @button-height-sm;
      line-height: @button-height-sm;
      padding: 0 @h-spacing-lg;
    }

    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > .@{buttonPrefixCls}-icon {
      margin-right: 0.5em;
    }
  }
</style>
