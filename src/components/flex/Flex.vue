<template>
  <div :class="wrapCls">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Flex',
  props: {
    prefixCls: {
      type: String,
      default: 'am-flexbox'
    },
    direction: {
      type: String,
      validator: function (value) {
        return ['row', 'row-reverse', 'column', 'column-reverse'].indexOf(value) !== -1
      }
    },
    wrap: {
      type: String,
      validator: function (value) {
        return ['nowrap', 'wrap', 'wrap-reverse'].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      validator: function (value) {
        return ['start', 'end', 'center', 'between', 'around'].indexOf(value) !== -1
      }
    },
    align: {
      type: String,
      default: 'center',
      validator: function (value) {
        return ['start', 'center', 'end', 'baseline', 'stretch'].indexOf(value) !== -1
      }
    },
    alignContent: {
      type: String,
      validator: function (value) {
        return ['start', 'end', 'center', 'between', 'around', 'stretch'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, direction, wrap, justify, align, alignContent } = this
      return {
        [`${prefixCls}`]: true,

        [`${prefixCls}-dir-row`]: direction === 'row',
        [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
        [`${prefixCls}-dir-column`]: direction === 'column',
        [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

        [`${prefixCls}-nowrap`]: wrap === 'nowrap',
        [`${prefixCls}-wrap`]: wrap === 'wrap',
        [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

        [`${prefixCls}-justify-start`]: justify === 'start',
        [`${prefixCls}-justify-end`]: justify === 'end',
        [`${prefixCls}-justify-center`]: justify === 'center',
        [`${prefixCls}-justify-between`]: justify === 'between',
        [`${prefixCls}-justify-around`]: justify === 'around',

        [`${prefixCls}-align-start`]: align === 'start',
        [`${prefixCls}-align-center`]: align === 'center',
        [`${prefixCls}-align-end`]: align === 'end',
        [`${prefixCls}-align-baseline`]: align === 'baseline',
        [`${prefixCls}-align-stretch`]: align === 'stretch',

        [`${prefixCls}-align-content-start`]: alignContent === 'start',
        [`${prefixCls}-align-content-end`]: alignContent === 'end',
        [`${prefixCls}-align-content-center`]: alignContent === 'center',
        [`${prefixCls}-align-content-between`]: alignContent === 'between',
        [`${prefixCls}-align-content-around`]: alignContent === 'around',
        [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch'
      }
    }
  }
}
</script>
<style lang="less">
  @import '../style/index.less';

  @flexPrefixCls: am-flexbox;

  /* flexbox */
  .@{flexPrefixCls} {
    text-align: left;
    overflow: hidden;
    display: flex;
    align-items: center;

    &&-dir-row {
      flex-direction: row;
    }

    &&-dir-row-reverse {
      flex-direction: row-reverse;
    }

    &&-dir-column {
      flex-direction: column;
      .@{flexPrefixCls}-item {
        margin-left: 0;
      }
    }

    &&-dir-column-reverse {
      flex-direction: column-reverse;
      .@{flexPrefixCls}-item {
        margin-left: 0;
      }
    }

    &&-nowrap {
      flex-wrap: nowrap;
    }

    &&-wrap {
      flex-wrap: wrap;
    }

    &&-wrap-reverse {
      flex-wrap: wrap-reverse;
    }

    &&-justify-start {
      justify-content: flex-start;
    }

    &&-justify-end {
      justify-content: flex-end;
    }

    &&-justify-center {
      justify-content: center;
    }

    &&-justify-between {
      justify-content: space-between;
    }

    &&-justify-around {
      justify-content: space-around;
    }

    &&-align-start {
      align-items: flex-start;
    }

    &&-align-end {
      align-items: flex-end;
    }

    &&-align-center {
      align-items: center;
    }

    &&-align-stretch {
      align-items: stretch;
    }

    &&-align-baseline {
      align-items: baseline;
    }

    &&-align-content-start {
      align-content: flex-start;
    }

    &&-align-content-end {
      align-items: flex-end;
    }

    &&-align-content-center {
      align-items: center;
    }

    &&-align-content-between {
      align-items: stretch;
    }

    &&-align-content-around {
      align-items: baseline;
    }

    &&-align-content-stretch {
      align-items: baseline;
    }

    & &-item {
      box-sizing: border-box;
      flex: 1;
      margin-left: @h-spacing-md;
      min-width: 10 * @hd;

      &:first-child {
        margin-left: 0;
      }
    }
  }
</style>
