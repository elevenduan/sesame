<template>
  <div>
    <Tabs tabBarPosition="top" :style="{'margin-bottom':'10px'}">
      <template slot="tabBar">
        <div>tab-bar-1</div>
        <div>tab-bar-2</div>
      </template>
      <template slot="tabContent">
        <div>tab-content-1</div>
        <div>tab-content-2</div>
      </template>
    </Tabs>
    <Tabs tabBarPosition="left">
      <template slot="tabBar">
        <div>tab-bar-1</div>
        <div>tab-bar-2</div>
      </template>
      <template slot="tabContent">
        <div>tab-content-1</div>
        <div>tab-content-2</div>
      </template>
    </Tabs>
  </div>
</template>
<script>
import { Tabs } from '@/components/index'

export default {
  components: {
    Tabs
  }
}
</script>
