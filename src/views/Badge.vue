<template>
  <div>
    <div class="box-badge">
      <Badge :dot="true">
        <span :style="{width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }"></span>
      </Badge>
      <span :style="{'margin-left':'12px'}">Dot badge</span>
    </div>
    <div class="box-badge">
      Content
      <Badge :text="77" :overflowCount="55"/>
    </div>
    <div class="box-badge">
      <Badge text='促' corner>
        <div class="corner-badge">Use corner prop</div>
      </Badge>
    </div>
    <div class="box-badge">
      <Badge text='促'/>
    </div>
    <div class="box-badge">
      <Badge :text="0" :style="{ marginLeft: 12 }">Text number 0</Badge>
      <Badge text='new' :style="{ marginLeft: 12 }"/>
    </div>
    <div class="box-badge">
      <Badge text="减" hot :style="{ marginLeft: 12 }"/>
      <Badge text="惠" hot :style="{ marginLeft: 12 }"/>
      <Badge text="免" hot :style="{ marginLeft: 12 }"/>
      <Badge text="反" hot :style="{ marginLeft: 12 }"/>
      <Badge text="HOT" hot :style="{ marginLeft: 12 }"/>
    </div>
    <div class="box-badge">
      <Badge text="券" :badgeStyle="{
        'margin-left': '12px',
        'padding': '0 3px',
        'background-color': '#f19736',
        'border-radius': '2px'}
        "/>
      <Badge text="NEW"
             :badgeStyle="{
        'margin-left': '12px',
        'padding': '0 3px',
        'background-color': '#21b68a',
        'border-radius': '2px' }
        "/>
      <Badge text="自动缴费" :badgeStyle="{
              'margin-left': '12px',
              padding: '0 3px',
              'background-color': '#fff',
              'border-radius': '2px',
              color: '#f19736',
              border: '1px solid #f19736'}"
      />
    </div>
  </div>
</template>

<script>
import { Badge } from '@/components/index'

export default {
  components: {
    Badge
  }
}
</script>
<style lang="less">
  .box-badge {
    padding: 20px;
  }

  .corner-badge {
    height: 50px;
    width: 200px;
  }

  .special-badge .am-list-line {
    padding-right: 0;
  }

  .special-badge .am-list-line .am-list-extra {
    padding: 0;
    height: 44px;
  }

  .special-badge .am-badge {
    transform: rotate(45deg);
    transform-origin: right bottom;
    right: 0;
    top: 13px;
    width: 50px;
  }

  .special-badge .am-badge-text {
    border-radius: 1px;
  }
</style>
