/*
 * @Description: Type your file description
 * @Author: qiangwu
 * @LastEditors: qiangwu
 * @Date: 2021-07-01 16:25:04
 * @LastEditTime: 2021-07-01 16:30:07
 * @FilePath: \make-friend\src\utils\request.js
 */
import axios from 'axios'// 引入axios

const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0'
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
