// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {locale: 'en', weekStartOn: 1})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAyw8_9FOYCKjFLnjbxhsrh0ZfQreqVIu0',
    libraries: 'places'
  }
})
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    query: ''
  },
  methods: {
  },
  router,
  template: '<App/>',
  components: { App }
})
