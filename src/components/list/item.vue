<template>
  <TouchFeedback :disabled="lineDisabled" :activeClassName="`${prefixCls}-active`">
    <div :class="wrapCls">
      <div :class="`${prefixCls}-thumb`" v-if="thumb||$slots.thumb">
        <slot name="thumb"><img :src="thumb"/></slot>
      </div>
      <div :class="lineCls">
        <div :class="`${prefixCls}-content`" v-if="$slots.default">
          <slot></slot>
          <div :class="`${prefixCls}-brief`" v-if="brief||$slots.brief">
            <slot name="brief">{{brief}}</slot>
          </div>
        </div>
        <div :class="`${prefixCls}-extra`" v-if="extra||$slots.extra">
          <slot name="extra">{{extra}}</slot>
        </div>
        <div :class="arrowCls" v-if="arrow"></div>
      </div>
    </div>
  </TouchFeedback>
</template>
<script>
  import TouchFeedback from '../touch-feedback/index'

  export default {
    name: 'Item',
    props: {
      prefixCls: {
        type: String,
        default: 'am-list-item'
      },
      thumb: {
        type: String
      },
      extra: {
        type: String
      },
      brief: {
        type: String
      },
      align: {
        type: String,
        default: 'middle',
        validator: function (value) {
          return ['top', 'middle', 'bottom'].indexOf(value) !== -1
        }
      },
      arrow: {
        type: String,
        validator: function (value) {
          return ['right', 'up', 'down', 'empty'].indexOf(value) !== -1
        }
      },
      error: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      wrap: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      wrapCls () {
        let {prefixCls, disabled, error, align} = this
        return {
          [prefixCls]: true,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-error`]: error,
          [`${prefixCls}-top`]: align === 'top',
          [`${prefixCls}-middle`]: align === 'middle',
          [`${prefixCls}-bottom`]: align === 'bottom'
        }
      },
      lineCls () {
        let {prefixCls, multiple, wrap} = this
        return {
          [`${prefixCls}-line`]: true,
          [`${prefixCls}-line-multiple`]: multiple,
          [`${prefixCls}-line-wrap`]: wrap
        }
      },
      arrowCls () {
        let {prefixCls, arrow} = this
        return {
          [`${prefixCls}-arrow`]: arrow,
          [`${prefixCls}-arrow-horizontal`]: arrow === 'right',
          [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
          [`${prefixCls}-arrow-vertical-up`]: arrow === 'up'
        }
      },
      lineDisabled () {
        let {disabled, arrow} = this
        return disabled || ['right', 'up', 'down'].indexOf(arrow) === -1
      }
    },
    components: {
      TouchFeedback
    }
  }
</script>
<style lang="less">
  @import '../style/index.less';

  @itemPrefixCls: am-list-item;

  .@{itemPrefixCls} {
    position: relative;
    display: flex;
    padding-left: @h-spacing-lg;
    min-height: @list-item-height;
    background-color: @fill-base;
    vertical-align: middle;
    overflow: hidden;
    transition: background-color 200ms;
    align-items: center;

    &.@{itemPrefixCls}-top {
      .@{itemPrefixCls}-line {
        align-items: flex-start;

        .@{itemPrefixCls}-arrow {
          margin-top: 2 * @hd;
        }
      }
    }

    &.@{itemPrefixCls}-middle {
      .@{itemPrefixCls}-line {
        align-items: center;
      }
    }

    &.@{itemPrefixCls}-bottom {
      .@{itemPrefixCls}-line {
        align-items: flex-end;
      }
    }

    &.@{itemPrefixCls}-error {
      .@{itemPrefixCls}-line {
        .@{itemPrefixCls}-extra {
          color: #f50;

          .@{itemPrefixCls}-brief {
            color: #f50;
          }
        }
      }
    }

    &.@{itemPrefixCls}-active {
      background-color: @fill-tap;
    }

    &&-disabled {
      .@{itemPrefixCls}-line {
        .@{itemPrefixCls}-content,
        .@{itemPrefixCls}-extra {
          color: @color-text-disabled;
        }
      }
    }

    img {
      width: @icon-size-md;
      height: @icon-size-md;
      vertical-align: middle;
    }

    /* list左图片显示*/
    .@{itemPrefixCls}-thumb {
      &:first-child {
        margin-right: @h-spacing-lg;
      }

      &:last-child {
        margin-left: @h-spacing-md;
      }
    }

    .@{itemPrefixCls}-line {
      position: relative;
      display: flex;
      flex: 1;
      align-self: stretch;
      padding-right: @h-spacing-lg;
      overflow: hidden;

      /* list左侧主内容*/
      .@{itemPrefixCls}-content {
        flex: 1;
        color: @color-text-base;
        font-size: @font-size-heading;
        line-height: @line-height-paragraph;
        text-align: left;
        .ellipsis();

        padding-top: 7 * @hd;
        padding-bottom: 7 * @hd;
      }

      /* list右补充内容*/
      .@{itemPrefixCls}-extra {
        flex-basis: 36%;
        color: @color-text-caption;
        font-size: @font-size-caption;
        line-height: @line-height-paragraph;
        text-align: right;
        .ellipsis();

        padding-top: 7 * @hd;
        padding-bottom: 7 * @hd;
      }

      .@{itemPrefixCls}-title {
        .ellipsis();
      }

      /* 辅助性文字*/
      .@{itemPrefixCls}-brief {
        color: @color-text-caption;
        font-size: @font-size-subhead;
        line-height: @line-height-paragraph;
        margin-top: @v-spacing-sm;
        .ellipsis();
      }

      /* list右侧箭头*/
      .@{itemPrefixCls}-arrow {
        display: block;
        width: @icon-size-xxs;
        height: @icon-size-xxs;
        margin-left: @h-spacing-md;
        .encoded-svg-background('right');

        background-size: contain;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        visibility: hidden;

        &-horizontal {
          visibility: visible;
        }

        &-vertical {
          visibility: visible;
          transform: rotate(90deg);
        }

        &-vertical-up {
          visibility: visible;
          transform: rotate(270deg);
        }
      }

      &-multiple {
        padding: 12.5 * @hd @h-spacing-lg 12.5 * @hd 0;

        .@{itemPrefixCls}-content {
          padding-top: 0;
          padding-bottom: 0;
        }

        .@{itemPrefixCls}-extra {
          padding-top: 0;
          padding-bottom: 0;
        }
      }

      &-wrap {
        .@{itemPrefixCls}-content {
          white-space: normal;
        }

        .@{itemPrefixCls}-extra {
          white-space: normal;
        }
      }
    }

    select {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      border: 0;
      font-size: @font-size-heading;
      appearance: none;
      background-color: transparent;
    }
  }
</style>
