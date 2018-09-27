<template>
  <div :class="wrapCls">
    <Flex v-for="i in rowCount" :key="`gridline-${i-1}`" justify="center" align="stretch">
      <FlexItem v-for="j in columnNum" :key="`griditem-${(i-1) * columnNum + (j-1)}`"
                :class="`${prefixCls}-item`" :style="itemStyleN">
        <div :class="`${prefixCls}-item-content`" @click="itemClick($event,(i-1) * columnNum + (j-1))">
          <div :class="`${prefixCls}-item-inner-content column-num-${columnNum}`"
               v-if="data[(i-1) * columnNum + (j-1)]">
            <Icon v-if="data[(i-1) * columnNum + (j-1)].icon"
                  v-bind="data[(i-1) * columnNum + (j-1)].icon"/>
            <img v-if="data[(i-1) * columnNum + (j-1)].img"
                 :class="`${prefixCls}-icon`"
                 :src="data[(i-1) *  columnNum + (j-1)].img"/>
            <div :class="`${prefixCls}-text`">{{data[(i-1) * columnNum + (j-1)].text}}</div>
          </div>
        </div>
      </FlexItem>
    </Flex>
  </div>
</template>
<script>
import Flex from '../flex/index'
import Icon from '../icon/index'

export default {
  name: 'Grid',
  props: {
    prefixCls: {
      type: String,
      default: 'am-grid'
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    square: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
    columnNum: {
      type: Number,
      default: 4
    },
    itemStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    onClick: {
      type: Function
    }
  },
  computed: {
    wrapCls () {
      const { prefixCls, hasLine, square } = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-line`]: hasLine,
        [`${prefixCls}-square`]: square
      }
    },
    rowCount () {
      const { data, columnNum } = this
      const dataLength = (data && data.length) || 0
      return Math.ceil(dataLength / columnNum)
    },
    itemStyleN () {
      const { columnNum, itemStyle } = this
      return {
        width: `${100 / columnNum}%`,
        ...itemStyle
      }
    }
  },
  components: {
    Icon,
    Flex,
    FlexItem: Flex.Item
  },
  methods: {
    itemClick (event, index) {
      this.onClick && this.onClick(event, index)
    }
  }
}
</script>
<style lang="less">
  @import '../style/index.less';

  @flexPrefixCls: am-flexbox;
  @gridPrefixCls: am-grid;

  /* flexbox */
  .@{gridPrefixCls} {
    .@{flexPrefixCls} {
      background: @fill-base;

      .@{flexPrefixCls}-item {
        margin-left: 0;

        &.@{gridPrefixCls}-item {
          position: relative;
        }

        &.@{gridPrefixCls}-item-active {
          .@{gridPrefixCls}-item-content {
            background-color: @fill-tap;
          }
        }

        .@{gridPrefixCls}-item-content {
          text-align: center;
          width: 100%;
          height: 100%;
          padding: @v-spacing-lg 0;

          .@{gridPrefixCls}-item-inner-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .@{gridPrefixCls}-icon {
              max-width: 100%;
            }

            .@{gridPrefixCls}-text {
              margin-top: @v-spacing-md;
              font-size: @font-size-caption-sm;
              color: @color-text-base;
              text-align: center;
            }

            &.column-num-3 {
              .@{gridPrefixCls}-text {
                font-size: @font-size-caption;
              }
            }

            &.column-num-2 {
              .@{gridPrefixCls}-text {
                margin-top: @v-spacing-lg;
                font-size: 18 * @hd;
              }
            }
          }
        }
      }
    }

    &.@{gridPrefixCls}-line {
      position: relative;
      &:not(.@{gridPrefixCls}-carousel) {
        .hairline('top');
        .hairline('right');
      }

      .@{flexPrefixCls} {
        position: relative;
        .hairline('bottom');

        .@{flexPrefixCls}-item {
          position: relative;
          &:first-child {
            .hairline('left');
          }
          &:not(:last-child) {
            .hairline('right');
          }
        }
      }

      &.@{gridPrefixCls}-carousel {
        .@{gridPrefixCls}-carousel-page {
          .hairline('top');
          .hairline('right');
        }
      }
    }

    .am-carousel {
      .am-carousel-wrap-dot > span {
        background: #dcdee3;
      }

      .am-carousel-wrap-dot-active > span {
        background: #0ae;
      }
    }

    &.@{gridPrefixCls}-square {
      .@{gridPrefixCls}-item {
        &:before {
          display: block;
          content: ' ';
          padding-bottom: 100%;
        }
        .@{gridPrefixCls}-item-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }
        .@{gridPrefixCls}-item-inner-content {
          height: 100%;
          .@{gridPrefixCls}-icon {
            margin-top: @v-spacing-md;
            width: 28% !important;
          }
        }
      }
    }
  }
</style>
