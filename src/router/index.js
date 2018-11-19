import Vue from 'vue'
import Router from 'vue-router'
import RobotTest from '@/components/RobotTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: RobotTest
    }
  ]
})
