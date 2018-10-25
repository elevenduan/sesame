<template>
  <div>
    <List header="Basic Style">
      <Item extra="extra content">Title</Item>
    </List>
    <List header="Subtitle">
      <Item arrow="right" brief="subtitle" multiple error extra="extra content">Title</Item>
      <Item arrow="right" brief="subtitle" multiple thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png">
        Title
      </Item>
    </List>
    <List header="Customized Right Side（Empty Content / Text / Image）">
      <Item>Title</Item>
      <Item arrow="right">Title</Item>
      <Item extra="extra content" arrow="right">Title</Item>
      <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            brief="subtitle" multiple>
        Title
      </Item>
    </List>
    <List header="Align Vertical Center">
      <Item multiple extra="extra content" brief="subtitle">Title</Item>
    </List>
    <List header="Icon in the left">
      <Item thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" arrow="right">My wallet</Item>
      <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="right">My Cost Ratio</Item>
    </List>
    <List header="Text Wrapping">
      <Item>Single line，long text will be hidden with ellipsis；</Item>
      <Item wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</Item>
      <Item extra="extra content" multiple align="top" wrap>
        Multiple line and long text will wrap. Long Text Long Text Long Text
      </Item>
      <Item extra="no arrow" arrow="empty" wrap>
        In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
      </Item>
    </List>
  </div>
</template>
<script>
  import {List} from '@/components/index'

  export default {
    components: {
      List,
      Item: List.Item
    },
    computed: {},
    created () {
    }
  }
</script>
