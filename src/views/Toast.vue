<template>
  <WingBlank>
    <WhiteSpace/>
    <Button @click.native="showToast">text only</Button>
    <WhiteSpace/>
    <Button @click.native="showToastNoMask">without mask</Button>
    <WhiteSpace/>
    <Button @click.native="successToast">success</Button>
    <WhiteSpace/>
    <Button @click.native="failToast">fail</Button>
    <WhiteSpace/>
    <Button @click.native="offline">network failure</Button>
    <WhiteSpace/>
    <Button @click.native="loadingToast">loading</Button>
    <WhiteSpace/>
  </WingBlank>
</template>
<script>
import { Toast, WhiteSpace, WingBlank, Button } from '@/components/index'

export default {
  components: {
    Button,
    WhiteSpace,
    WingBlank
  },
  methods: {
    showToast () {
      Toast.info('This is a toast tips !!!', 1)
    },
    showToastNoMask () {
      Toast.info('Toast without mask !!!', 2, null, false)
    },
    successToast () {
      Toast.success('Load success !!!', 1)
    },
    failToast () {
      Toast.fail('Load failed !!!', 1)
    },
    offline () {
      Toast.offline('Network connection failed !!!', 1)
    },
    loadingToast () {
      Toast.loading('Loading...', 1, () => {
        console.log('Load complete !!!')
      })
    }
  }
}
</script>
