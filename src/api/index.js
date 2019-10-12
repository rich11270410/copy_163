import ajax from './ajax'

//获取首页数据
export const reqHomeData = () => ajax('/api/home')

//获取分类列表
export const reqCategory = () => ajax('/api/category')

//获取topic数据
export const reqCategoryList = () => ajax('/api/categoryList')

//识物-Tab 懒数据
export const reqRecommendTabs = () => ajax('/api1/topic/v1/find/getTabs.json')
//识物-推荐 懒数据
export const reqRecommendTData = () => ajax('/api1/topic/v1/find/recManual.json')

//搜索关键字
export const reqInitSearch = () => ajax('/api1/xhr/search/init.json', 'post')
//搜索关键字结果
export const reqSearchResult = (keywordPrefix) => ajax('/api1/xhr/search/searchAutoComplete.json',{keywordPrefix})

//发送短信验证码的接口
export const reqSendCode = (phone) => ajax({
  url: "/sendcode",
  params: {
    phone
  }
})

//用户名密码登录
export const reqPwdLogin = ({name,pwd,captcha}) => ajax({
  url: '/login_pwd',
  method: 'POST',
    data: {
      name,
      pwd,
      captcha
    }
})

//手机号验证码登录
export const reqSmsLogin = ({phone,code}) => ajax({
  url: '/login_sms',
  method: 'POST',
  data: {
    phone,
    code
  }
})

//自动登录
export const reqAutoLogin = () => ajax('/auto_login', {})
