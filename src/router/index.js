/*
 * @Description: Type your file description
 * @Author: qiangwu
 * @LastEditors: qiangwu
 * @Date: 2021-07-01 15:54:46
 * @LastEditTime: 2021-07-01 16:05:29
 * @FilePath: \make-friend\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({routes: [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]})
