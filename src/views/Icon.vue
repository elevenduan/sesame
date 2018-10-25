<template>
  <div>
    <Grid :data="typelist" :columnNum="3" :hasLine="false"></Grid>
    <Grid :data="sizelist" :columnNum="5" :hasLine="false"></Grid>
  </div>
</template>
<script>
  import {Grid} from '@/components/index'

  export default {
    data () {
      return {
        type: [
          'check-circle', 'check', 'check-circle-o',
          'cross-circle', 'cross', 'cross-circle-o',
          'up', 'down', 'left',
          'right', 'ellipsis',
          'loading'
        ],
        size: ['xxs', 'xs', 'sm', 'md', 'lg']
      }
    },
    computed: {
      typelist () {
        return this.type.map(item => ({
          icon: {type: item},
          text: item
        }))
      },
      sizelist () {
        return this.size.map(item => ({
          icon: {type: 'search', size: item},
          text: item
        }))
      }
    },
    components: {
      Grid
    }
  }
</script>
