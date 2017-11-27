import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Careers from '@/components/Careers'
import Pursuits from '@/components/Pursuits'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Home
      
    },
     {
      path: '/home/:param',
      name: 'Home',
      component: Home
      
    },
     {
      path: '/profile',
      name: 'Profile',
      component: Profile
      
    }
    ,
     {
      path: '/careers',
      name: 'Careers',
      component: Careers
      
    },
     {
      path: '/pursuits',
      name: 'Pursuits',
      component: Pursuits
      
    } 
     

  ] 
})
