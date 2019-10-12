<template>
  <div class="loginContainer">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
      </div>

      <!-- 手机登录-->
      <div class="phone_login" v-show="$route.query.isPhoneLogin">
        <div class="tel">
          <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone"/>
        </div>
        <div class="code">
          <input type="text" placeholder="请输入短信验证码" v-model="code"/>
          <button class="get_code">获取验证码</button>
        </div>
        <div class="error-message">
          <span>{{errorMsg}}</span>
        </div>
        <div class="help">
          <span>遇到问题？</span>
          <span class="tab">使用密码验证登录</span>
        </div>
        <button class="login" @click="login">登录</button>
      </div>

        <!-- 邮箱登录 -->
      <div class="email_login" v-show="!$route.query.isPhoneLogin">
        <div class="tel">
          <input type="text" placeholder="邮箱账号" v-model="email"/>
        </div>
        <div class="code">
          <input type="text" placeholder="密码" v-model="pwd"/>
        </div>
        <div class="error-message">
          <span>{{errorMsg}}</span>
        </div>
        <div class="help">
          <span @click="$router.replace({path: '/profile/register', query: {isPhoneRegister: true}})">注册账号</span>
          <span class="tab">忘记密码</span>
        </div>
        <button class="login" @click="login">登录</button>

      </div>

      <!-- 其它登录方式-->

      <div class="other_login" @click="toggleLogin()">
        <span>其它登录方式</span>
         <i class="iconfont icon-you"></i>
      </div>

      <!-- 注册账号 -->
      <div class="register"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Login',
    data() {
      return {
        phone: '', //手机号
        code: '', //短信验证码
        email: '', //邮箱
        pwd: '', // 密码
        errorMsg: '' // 验证失败提示错误信息
      }
    },
    //接收数据
    props: {
      setShow: Function
    },
    
    methods: {
      toggleLogin() {
        this.setShow()
        this.errorMsg = ''
      },
      login() {
         // 进行前端表单验证
        const {phone, code, email, pwd} = this;
        if (this.$route.query.isPhoneLogin) {
          // 手机登录
          if (phone.trim() === '') {
            this.errorMsg = '手机号不能为空';
          } else if (!(/^1[3456789]\d{9}$/.test(phone))) {
            this.errorMsg = '手机号格式不正确';
          } else if (code.trim() === '') {
            this.errorMsg = '验证码不能为空';
          } else if (!(/^\d{6}$/.test(code))) {
            this.errorMsg = '请输入正确的6位数字验证码';
          } else {
            this.errorMsg = '';
            console.log('登录成功1');
          }
        } else {
          // 邮箱登陆
          if (email.trim() === '') {
            this.errorMsg = '邮箱不能为空';
          } else if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email))) {
            this.errorMsg = '邮箱格式不正确';
          } else if (pwd.trim() === '') {
            this.errorMsg = '密码不能为空';
          } else if (pwd.length < 6) {
            this.errorMsg = '密码应不小于6位';
          } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
            this.errorMsg = '密码必须由数字和字母组成';
          } else {
            this.errorMsg = '';
            console.log('登录成功2');
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../../common/stylus/mixins.styl"
  .loginContainer
    height 100%
    background-color #fff
    padding 88px 40px
    box-sizing border-box
    .logo
      display flex
      justify-content center
      align-items center
      img
        width 200px
        height 64px
    .phone_login, .email_login
      padding-top 100px
      .tel, .code
        width 675px
        height 90px
        margin 30px auto 
        position relative
        bottom-border-1px(#666666)
        input 
          color #333333
          width 100%
          height 100%
          outline none
          border 0 none 
        .get_code
          position absolute
          right 0
          bottom 0
          margin-bottom 20px
          width 172px
          height 56px
          text-align center
          line-height 56px
          border 1px solid #7f7f7f
          border-radius 8px
          font-size 28px
          color #333333
          outline none
      .help  
        padding 30px 0 30px
        display flex
        justify-content space-between
        font-size 30px
        color #7f7f7f
        text-align center
        .tab
          color #333333
      .login  
        margin-top 30px
        width 100%
        height 96px
        color #fff
        background-color #DD1A21
        display flex
        justify-content center
        align-items center
        font-size 28px  
        outline none
        border-radius 4px
    .other_login
      display flex
      align-items center
      justify-content center
      width 670px
      height 90px
      font-size 28px
      margin-top 32px
</style>
