<script>
  // TabBar // SegmentedControl
  export default {
    props: {
      prefixCls: {
        type: String,
        default: 'am-tabs'
      },
      tabBarPosition: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
        }
      },
      initialTab: {
        type: Number,
        default: 1
      },
      animated: {
        type: Boolean,
        default: true
      },
      onTabClick: {
        type: Function
      }
    },
    data () {
      return {
        activeTab: this.initialTab - 1
      }
    },
    methods: {
      tabClick: function (index) {
        this.activeTab = index
      }
    },
    render: function (h) {
      let {prefixCls, tabBarPosition, activeTab, animated, tabClick, $slots: {tabBar, tabContent}} = this

      let horizontalDirection = ['top', 'bottom'].indexOf(tabBarPosition) !== -1
      let whStyle = {[horizontalDirection ? 'width' : 'height']: `${100 / tabBar.length}%`}
      let underlineStyle = {...whStyle, [horizontalDirection ? 'left' : 'top']: `${100 / tabBar.length * activeTab}%`}
      let contentStyle = horizontalDirection
        ? {transform: `translate3d(${-activeTab * 100}%, 0, 0)`}
        : {transform: `translate3d(0, ${-activeTab * 100}%, 0)`}

      let tabBarEx =
        tabBar.map((item, index) => {
          return (
            <div class={`${prefixCls}-tab-bar-item ${activeTab === index ? prefixCls + '-tab-bar-item-active' : ''}`}
                 style={whStyle}
                 onClick={() => { tabClick(index) }}>
              {item}
            </div>
          )
        })
      let tabContentEx =
        tabContent.map((item) => {
          return <div class={`${prefixCls}-tab-content-item`}>{item}</div>
        })

      return (
        <div class={`${prefixCls} ${prefixCls}-${tabBarPosition} ${animated ? prefixCls + '-animated' : ''}`}>
          <div class={`${prefixCls}-tab-bar`}>
            {tabBarEx}
            <div class={`${prefixCls}-tab-bar-underline`} style={underlineStyle}/>
          </div>
          <div class={`${prefixCls}-tab-content`} style={contentStyle}>
            {tabContentEx}
          </div>
        </div>
      )
    }
  }
</script>
<style lang="less">
  @import "../style/index.less";

  @tabs: am-tabs;
  @tab-bar: am-tabs-tab-bar;
  @tab-content: am-tabs-tab-content;

  @easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
  @effect-duration: .3s;

  @page-hide-color: rgba(255, 255, 255, 0);
  @page-show-color: rgba(255, 255, 255, 1);

  .@{tabs} {
    display: flex;
    box-sizing: border-box;
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: @fill-base;
    .@{tab-bar} {
      display: flex;
      box-sizing: border-box;
      position: relative;
      text-align: center;
      overflow: visible;
      z-index: 1;
      flex-shrink: 0;
      &-item {
        box-sizing: border-box;
        flex-shrink: 0;
        font-size: @tabs-font-size-heading;
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &-item-active {
        color: @tabs-color;
      }
      &-underline {
        position: absolute;
        z-index: 2;
        border: 0 @tabs-color solid;
        transform: translate3d(0, 0, 0);
      }
    }
    .@{tab-content} {
      width: 100%;
      height: 100%;
      display: flex;
      &-item {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
      }
    }
    // top, bottom, left, right
    &-top, &-bottom {
      .@{tab-bar}, .@{tab-content} {
        flex-direction: row;
      }
      .@{tab-bar}-item {
        height: @tabs-height;
      }
    }
    &-left, &-right {
      .@{tab-bar}, .@{tab-content} {
        flex-direction: column;
      }
    }
    &-top {
      flex-direction: column;
      .@{tab-bar} {
        &-item {
          .hairline('bottom');
        }
        &-underline {
          bottom: 0;
          border-bottom-width: 2px;
        }
      }
    }
    &-bottom {
      flex-direction: column-reverse;
      .@{tab-bar} {
        &-item {
          .hairline('top');
        }
        &-underline {
          top: 0;
          border-top-width: 2px;
        }
      }
    }
    &-left {
      flex-direction: row;
      .@{tab-bar} {
        &-item {
          .hairline('right');
        }
        &-underline {
          right: 0;
          border-right-width: 2px;
        }
      }
    }
    &-right {
      flex-direction: row-reverse;
      .@{tab-bar} {
        &-item {
          .hairline('left');
        }
        &-underline {
          left: 0;
          border-left-width: 2px;
        }
      }
    }
    // animated
    &-animated .@{tab-bar}-underline {
      transition: top @effect-duration @easing-in-out, left @effect-duration @easing-in-out, color @effect-duration @easing-in-out, width @effect-duration @easing-in-out;
      will-change: top, left, width, color;
    }
    &-animated .@{tab-content} {
      transition: transform @effect-duration @easing-in-out;
      will-change: transform;
    }
  }

</style>
