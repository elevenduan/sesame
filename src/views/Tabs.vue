<template>
  <div>
    <div :style="{'margin-bottom': '10px', 'height': '150px'}">
      <Tabs tabBarPosition="top">
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
    <div :style="{'margin-bottom': '10px', 'height': '150px'}">
      <Tabs tabBarPosition="bottom">
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
    <div :style="{'margin-bottom': '10px', 'height': '150px'}">
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
    <div :style="{'margin-bottom': '10px', 'height': '150px'}">
      <Tabs tabBarPosition="right">
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
