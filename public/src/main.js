// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

 

import '@/assets/js/bootstrap.min.js' 
import '@/assets/js/util.js' 
import '@/assets/js/mainif.js'  

import '@/assets/css/main.css' 
import '@/assets/css/bootstrap.min.css' 
import '@/assets/css/font-awesome.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#wrapper',
  router, 
  template: '<App/>',
  components: { App }
})
