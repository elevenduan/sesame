<template>
  <div :class="wrapCls">
    <div v-for="(value, index) in values"
         :key="index"
         :class="itemCls(index)"
         :style="itemStyle(index)"
         @click="itemClick(index)"
    >
      {{value}}
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        current: this.selected - 1
      }
    },
    props: {
      prefixCls: {
        type: String,
        default: 'am-segment'
      },
      selected: {
        type: Number,
        default: 1
      },
      disabled: {
        type: Boolean,
        default: false
      },
      values: {
        type: Array,
        default: function () {
          return []
        }
      },
      color: {
        type: String
      },
      onChange: {
        type: Function
      }
    },
    computed: {
      wrapCls () {
        let {prefixCls, disabled} = this
        return {
          [`${prefixCls}`]: true,
          [`${prefixCls}-disabled`]: disabled
        }
      }
    },
    methods: {
      itemCls (index) {
        let {prefixCls, current} = this
        return {
          [`${prefixCls}-item`]: true,
          [`${prefixCls}-item-selected`]: index === current
        }
      },
      itemStyle (index) {
        let {color, current} = this
        return {
          'color': color && (index === current ? '#fff' : color),
          'background-color': color && (index === current ? color : ''),
          'border-color': color
        }
      },
      itemClick (index) {
        if (this.disabled || index === this.current) {
          return
        }
        this.current = index
        this.onChange && this.onChange(index + 1)
      }
    },
    watch: {
      selected (val) {
        this.current = val - 1
        this.onChange && this.onChange(val)
      }
    }
  }
</script>
<style lang="less">
  @import "../style/index";

  @segment-prefix-cls: am-segment;

  .@{segment-prefix-cls} {
    display: flex;
    border-radius: @radius-md;
    overflow: hidden;
    min-height: @segmented-control-height;
    opacity: 1;

    &&-disabled {
      opacity: 0.5;
    }

    &-item {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      color: @segmented-control-color;
      font-size: @font-size-base;
      line-height: @line-height-base;
      transition: background .2s;
      position: relative;
      border: @border-width-md solid @segmented-control-color;
      width: 100%;
      box-sizing: border-box;
      border-left-width: 0;

      &:first-child {
        border-left-width: @border-width-md;
        border-radius: @radius-md 0 0 @radius-md;
      }

      &:last-child {
        border-radius: 0 @radius-md @radius-md 0;
      }

      &-selected {
        background: @segmented-control-color;
        color: @color-text-base-inverse;
      }
    }
  }
</style>
