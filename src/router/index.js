/*
 * @Description: Type your file description
 * @Author: qiangwu
 * @LastEditors: qiangwu
 * @Date: 2021-07-01 15:54:46
 * @LastEditTime: 2021-07-01 16:21:09
 * @FilePath: \make-friend\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/views/home/index')
Vue.use(Router)

export default new Router({routes: [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]})
