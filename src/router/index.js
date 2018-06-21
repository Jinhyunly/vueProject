import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from 'components/Index'
import Calendar from 'components/Calendar'
import Cummunity from 'components/Cummunity'
import Map from 'components/Map'
import CummunityInfo from 'components/CummunityInfo'
import Write from 'components/Write'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: Map
    },
    {
      path: '/cummunity',
      name: 'cummunity',
      component: Cummunity
    },
    {
      path: '/cummunity/:id',
      name: 'cummunityinfo',
      component: CummunityInfo
    },
    {
      path: '/write',
      name: 'write',
      component: Write
    }
  ]
})
