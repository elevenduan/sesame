<template>
  <span v-if="image" :class="wrapCls" :style="{'background-image': `url(${image})`}"/>
  <svg v-else :class="wrapCls" :style="{color}">
    <use :xlink:href="`#${type}`"/>
  </svg>
</template>
<script>
  import loadSprite from './loadSprite'

  export default {
    name: 'Icon',
    props: {
      prefixCls: {
        type: String,
        default: 'am-icon'
      },
      size: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'].indexOf(value) !== -1
        }
      },
      type: String,
      color: String,
      image: String
    },
    computed: {
      wrapCls () {
        const {prefixCls, type, size} = this
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${type}`]: type,
          [`${prefixCls}-${size}`]: size
        }
      }
    },
    created () {
      loadSprite()
    }
  }
</script>
<style lang="less">
  @import '../style/index.less';

  .am-icon {
    fill: currentColor;
    background-size: cover;
    display: inline-block;
    vertical-align: middle;
    width: @icon-size-md;
    height: @icon-size-md;

    &-xxs {
      width: @icon-size-xxs;
      height: @icon-size-xxs;
    }

    &-xs {
      width: @icon-size-xs;
      height: @icon-size-xs;
    }

    &-sm {
      width: @icon-size-sm;
      height: @icon-size-sm;
    }

    &-md {
      width: @icon-size-md;
      height: @icon-size-md;
    }

    &-lg {
      width: @icon-size-lg;
      height: @icon-size-lg;
    }

    &-xl {
      width: @icon-size-xl;
      height: @icon-size-xl;
    }

    &-xxl {
      width: @icon-size-xxl;
      height: @icon-size-xxl;
    }

    &-loading {
      animation: cirle-anim 1s linear infinite;
    }

    @keyframes cirle-anim {
      100% {
        transform: rotate(360deg);
      }
    }
  }
</style>
