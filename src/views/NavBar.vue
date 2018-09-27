<template>
  <div>
    <NavBar mode="light">
      <template slot="left">
        <Icon type="left"/>
      </template>
      <template slot="title">NavBar</template>
      <template slot="right">
        <Icon type="search" :style="{'margin-right':'16px'}"/>
        <Icon type="ellipsis"/>
      </template>
    </NavBar>
    <NavBar mode="dark">
      <template slot="left">
        <div>Back</div>
      </template>
      <template slot="title">NavBar</template>
      <template slot="right">
        <Icon type="search" :style="{'margin-right':'16px'}"/>
        <Icon type="ellipsis"/>
      </template>
    </NavBar>
  </div>
</template>
<script>
import { NavBar, Icon } from '@/components/index'

export default {
  components: {
    NavBar,
    Icon
  }
}
</script>
