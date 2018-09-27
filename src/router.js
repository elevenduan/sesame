import Vue from 'vue'
import Router from 'vue-router'

import Flex from './views/Flex'
import WhiteSpace from './views/WhiteSpace'
import WingBlank from './views/WingBlank'
import Grid from './views/Grid'
import Badge from './views/Badge'
import Icon from './views/Icon'
import Button from './views/Button'
import NavBar from './views/NavBar'
import Toast from './views/Toast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/flex',
      component: Flex
    },
    {
      path: '/white-space',
      component: WhiteSpace
    },
    {
      path: '/wing-blank',
      component: WingBlank
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/badge',
      component: Badge
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/button',
      component: Button
    },
    {
      path: '/nav-bar',
      component: NavBar
    },
    {
      path: '/toast',
      component: Toast
    }
  ]
})
