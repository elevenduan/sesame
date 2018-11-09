<template>
  <WingBlank size="lg" class="sc-example">
    <p class="sub-title">Simplest</p>
    <SegmentedControl :values="['Segment1', 'Segment2']"/>

    <p class="sub-title">Disabled</p>
    <SegmentedControl :values="['Segment1', 'Segment2']" disabled/>

    <p class="sub-title">SelectedIndex</p>
    <SegmentedControl :selected="2" :values="['Segment1', 'Segment2', 'Segment3']"/>

    <p class="sub-title">TintColor</p>
    <SegmentedControl :values="['Segment1', 'Segment2', 'Segment3']"
                      color='#ff0000'
                      :style="{height: '40px', width: '250px'}"
    />

    <p class="sub-title">onChange/onValueChange</p>
    <SegmentedControl
      :selected="1"
      :values="['Segment1', 'Segment2', 'Segment3']"
      :onChange="onChange"
    />
  </WingBlank>
</template>
<script>
  import {SegmentedControl, WingBlank} from '../components/index'

  export default {
    components: {
      SegmentedControl,
      WingBlank
    },
    methods: {
      onChange (selected) {
        console.log(selected)
      }
    }
  }
</script>
<style lang="less">
  .sc-example {
    padding-bottom: 13px;
  }

  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
    margin: 0;
  }
</style>
