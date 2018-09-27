<template>
  <div :style="{padding:'15px 0'}">
    <WingBlank>
      <PlaceHolder/>
    </WingBlank>
    <WhiteSpace size="lg"/>
    <WingBlank size="md">
      <PlaceHolder/>
    </WingBlank>
    <WhiteSpace size="lg"/>
    <WingBlank size="sm">
      <PlaceHolder/>
    </WingBlank>
  </div>
</template>
<script>
import { WingBlank, WhiteSpace } from '@/components/index'

export default {
  components: {
    WingBlank,
    WhiteSpace,
    PlaceHolder: {
      render () {
        return <div class="placeholder">Block</div>
      }
    }
  }
}

</script>
<style lang="less">
  .placeholder {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
</style>
