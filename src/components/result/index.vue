<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-pic`" v-if="iconProps||$slots.pic">
      <slot name="pic">
        <Icon v-bind="iconPropsEx"></Icon>
      </slot>
    </div>
    <div :class="`${prefixCls}-title`" v-if="title||$slots.title">
      <slot name="title">{{title}}</slot>
    </div>
    <div :class="`${prefixCls}-message`" v-if="message||$slots.message">
      <slot name="message">{{message}}</slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import Icon from '../icon/index'

  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'am-result'
      },
      iconProps: {
        type: Object
      },
      title: {
        type: String
      },
      message: {
        type: String
      }
    },
    computed: {
      iconPropsEx () {
        return {
          size: 'xxl',
          ...this.iconProps
        }
      }
    },
    components: {
      Icon
    }
  }
</script>
<style lang="less">
  @import "../style/index";

  @resultPrefixCls: am-result;

  .@{resultPrefixCls} {
    position: relative;
    text-align: center;
    width: 100%;
    padding-top: 30 * @hd;
    padding-bottom: @v-spacing-xl;
    background-color: @fill-base;
    .hairline('bottom');

    & &-pic {
      //width: 60 * @hd;
      //height: 60 * @hd;
      //margin: 0 auto;
      //line-height: 60 * @hd;
      //background-size: 60 * @hd 60 * @hd;
    }

    & &-title,
    & &-message {
      font-size: 21 * @hd;
      color: @color-text-base;
      padding-left: @h-spacing-lg;
      padding-right: @h-spacing-lg;
    }

    & &-title {
      margin-top: @v-spacing-lg;
      line-height: @line-height-base;
    }

    & &-message {
      margin-top: @v-spacing-md;
      line-height: @line-height-paragraph;
      font-size: @font-size-caption;
      color: @color-text-caption;
    }

    & &-button {
      padding: 0 @h-spacing-lg;
      margin-top: @v-spacing-lg;
    }
  }
</style>
