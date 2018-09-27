<template>
  <div>
    <div class="sub-title">Always square grid item</div>
    <Grid :data="data"/>

    <div class="sub-title">Grid item adjust accroiding to img size</div>
    <Grid :data="data" :square="false" class="not-square-grid"/>

    <div class="sub-title">ColumnNum=3</div>
    <Grid :data="data" :columnNum="3"/>

    <div class="sub-title">No border</div>
    <Grid :data="data" :hasLine="false"/>

    <div class="sub-title">Custom GridCell Style</div>
    <Grid :data="data" :columnNum="3" :itemStyle="{height: '150px', background: 'rgba(0,0,0,.05)'}"/>
  </div>
</template>
<script>
import { Grid } from '@/components/index'

export default {
  data () {
    return {
      data: Array.from(new Array(9)).map((_val, i) => ({
        img: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
        text: `name${i}`
      })),
      data1: Array.from(new Array(9)).map(() => ({
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png'
      }))
    }
  },
  components: {
    Grid
  }
}
</script>
<style lang="less">
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 15px 0 9px 15px;
  }

  .not-square-grid .am-grid-icon {
    width: 40px;
    height: 60px;
  }
</style>
