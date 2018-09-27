<template>
  <div class="flex-container">
    <div class="sub-title">Basic</div>
    <Flex>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
    </Flex>
    <WhiteSpace size="lg"/>
    <Flex>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
      <FlexItem>
        <PlaceHolder/>
      </FlexItem>
    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
    </Flex>
    <WhiteSpace size="lg"/>

    <div class="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex justify="end">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex justify="between">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline"/>
    </Flex>

    <WhiteSpace/>
    <Flex align="start">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline small"/>
      <PlaceHolder class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex align="end">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline small"/>
      <PlaceHolder class="inline"/>
    </Flex>
    <WhiteSpace/>
    <Flex align="baseline">
      <PlaceHolder class="inline"/>
      <PlaceHolder class="inline small"/>
      <PlaceHolder class="inline"/>
    </Flex>
  </div>
</template>
<script>
import { Flex, WhiteSpace } from '@/components/index'

export default {
  components: {
    Flex,
    FlexItem: Flex.Item,
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
  .flex-container {
    margin: 0 15px;
  }

  .flex-container .inline {
    width: 80px !important;
    margin: 9px 9px 9px 0;
  }

  .flex-container .small {
    height: 20px !important;
    line-height: 20px !important;
  }

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
  }

  .placeholder {
    background-color: #ebebef;
    color: #bbb;
    text-align: center;
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
</style>
