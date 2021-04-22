import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button';
import Index from '../components/Index';
import List from '../components/user/List';
import Login from '../components/user/Login';
import Register from '../components/user/Register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/button',
      component: Button
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/user',
      component: List
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
