//封装用于发送ajax请求的函数模块
import axios from 'axios'

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise 
    if (method = 'GET') {
      promise = axios.get(url, {
        params: data
      }
      )
    } else {
      promise = axios.post(url, data)
    }
    promise
      .then(response => {
        console.log('请求成功')
        resolve(response.data)
      })
      .catch(error => {
        alert('请求失败' + error.msg)
      })
  })
}

