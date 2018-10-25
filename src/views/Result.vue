<template>
  <div>
    <div class="sub-title">支付成功</div>
    <Result>
      <Icon slot="pic" size="xxl" image="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"></Icon>
      <div slot="title">支付成功</div>
      <div slot="message">998.00元
        <del>1098元</del>
      </div>
    </Result>
    <WhiteSpace/>
    <div class="sub-title">验证成功</div>
    <Result :iconProps="{'type':'check-circle','color':'#1F90E6'}"
            title="验证成功"
            message="所提交内容已成功完成验证"
    />
    <WhiteSpace/>
    <div class="sub-title">支付失败</div>
    <Result :iconProps="{'type':'cross-circle-o','color':'#F13642'}"
            title="支付失败"
            message="所选银行卡余额不足"
    />
    <WhiteSpace/>
    <div class="sub-title">等待处理</div>
    <Result
      :iconProps="{'image':'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg'}"
      title="等待处理"
      message="已提交申请，等待银行处理"
    />
    <WhiteSpace/>
    <div class="sub-title">操作失败</div>
    <Result
      :iconProps="{'image':'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg'}"
      title="无法完成操作"
      message="由于你的支付宝账户还未绑定淘宝账户请登请登录www.taobao.com"
    />
  </div>
</template>
<script>
  import {Result, Icon, WhiteSpace} from '@/components/index'

  export default {
    data () {
      return {}
    },
    components: {
      Icon,
      Result,
      WhiteSpace
    }
  }
</script>
<style lang="less">
  .sub-title {
    color: #888;
    font-size: 14px;
    padding: 30px 0 18px 0;
    margin-left: 15px;
  }
</style>
