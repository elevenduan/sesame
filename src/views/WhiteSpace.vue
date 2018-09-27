<template>
  <div>
    <WhiteSpace size="xs"/>
    <PlaceHolder/>

    <WhiteSpace size="sm"/>
    <PlaceHolder/>

    <WhiteSpace/>
    <PlaceHolder/>

    <WhiteSpace size="lg"/>
    <PlaceHolder/>

    <WhiteSpace size="xl"/>
    <PlaceHolder/>
  </div>
</template>

<script>
import { WhiteSpace } from '@/components/index'

export default {
  components: {
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
