<template>
  <NavBar mode="light">
    <template slot="left">
      <Icon type="left"/>
    </template>
    <template slot="title">NavBar</template>
    <template slot="right">
      <Icon type="ellipsis" @click.native="show"/>
    </template>
  </NavBar>
</template>
<script>
  import {Icon, NavBar} from '@/components/index'

  export default {
    created () {
      console.log(1)
    },
    components: {
      Icon, NavBar
    },
    methods: {
      show () {
        console.log('show')
      }
    }
  }
</script>
