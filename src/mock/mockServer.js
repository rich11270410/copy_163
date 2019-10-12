import Mock from 'mockjs'

import category from './category.json'
import categoryList from './categoryList.json'
import homeData from './homeData.json'

//定义接口 模拟数据
Mock.mock('/api/home', {
  code: 0,
  data: homeData
})

Mock.mock('/api/category', {
  code: 0,
  data: category
})

Mock.mock('/api/categoryList', {
  code: 0,
  data: categoryList
})

