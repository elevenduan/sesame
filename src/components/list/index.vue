<template>
  <div :class="wrapCls">
    <div :class="`${prefixCls}-header`" v-if="header||$slots.header">
      <slot name="header">{{header}}</slot>
    </div>
    <div :class="`${prefixCls}-body`">
      <slot></slot>
    </div>
    <div :class="`${prefixCls}-footer`" v-if="footer||$slots.footer">
      <slot name="footer">{{footer}}</slot>
    </div>
  </div>
</template>
<script>
  import Item from './item'

  export default {
    name: 'List',
    Item,
    props: {
      prefixCls: {
        type: String,
        default: 'am-list'
      },
      header: {
        type: String
      },
      footer: {
        type: String
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
<style lang="less">
  @import '../style/index.less';

  @listPrefixCls: am-list;

  .@{listPrefixCls} {
    &-header, &-footer {
      box-sizing: border-box;
      width: 100%;
      font-size: @font-size-base;
      color: @color-text-caption;
    }
    &-header {
      padding: @v-spacing-lg @h-spacing-lg @v-spacing-md @h-spacing-lg;
    }

    &-footer {
      padding: @v-spacing-md @h-spacing-lg @v-spacing-lg @h-spacing-lg;
    }

    &-body {
      position: relative;
      background-color: @fill-base;
      .hairline('top');
      .hairline('bottom');

      .@{listPrefixCls}-item:not(:last-child) {
        .@{listPrefixCls}-item-line {
          .hairline('bottom');
        }
      }
    }
  }
</style>
