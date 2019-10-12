<template>
  <div class="registerContainer">
    <div class="register_title">
      <span>{{$route.query.isPhoneRegister? '手机号注册' : '邮箱账号注册'}}</span>
    </div>
    <div class="phone_register" v-show="$route.query.isPhoneRegister">
      <div class="tel">
        <input type="text" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="code">
        <input type="text" placeholder="请输入短信验证码">
        <button class="get_code">获取验证码</button>
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码">
      </div>
      <button class="register" @click="register">注册</button>
    </div>
    <div class="email_register" v-show="!$route.query.isPhoneRegister">
      <div class="email">
        <input type="text" placeholder="邮箱账号">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="confirm-pwd">
        <input type="password" placeholder="请确认密码">
      </div>
      <button class="register" @click="register">注册</button>
    </div>
    <div class="info">
      <span class="select" :class="{selected: isSelect}" @click="isSelect = !isSelect">
        <input type="checkbox">
      </span>
      <div class="text">
        <span>我同意</span>
        <a href="javascript:void(0);">《网易服务条款》</a>
        <span>和</span>
        <a href="javascript:void(0);">《网易隐私政策》</a>
      </div>
    </div>
    <div class="email-register"
         @click="$router.replace({path: '/profile/register', query: {isPhoneRegister: false}})"
         v-show="$route.query.isPhoneRegister"
    >
      <span>邮箱账号注册</span>
      <i class="iconfont icon-you"></i>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isSelect: true // 是否勾选同意协议
      }
    },
    methods: {
      register () {
        console.log('注册方式验证')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl";
  .registerContainer
    height 100%
    background-color #fff
    padding 0px 40px
    box-sizing border-box
    .register_title
      margin-top 88px
      display flex
      justify-content center
      span 
        color #333333
        font-size 34px
    .phone_register, .email_register
      padding-top 40px
      .tel, .code, .pwd, .email, .confirm-pwd
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
        .tab
          color #333333
      .register 
        width 100%
        height 96px
        color #fff
        outline one 
        border 0 none
        margin 0
        background-color #DD1A21
        display flex
        justify-content center
        align-items center
        font-size 28px  
        border-radius 4px
    .info
      height 40px
      display flex
      align-items center
      margin-top 30px 
      input
        width 30px
        height 30px
        outline none
        visibility hidden
      .text
        span 
          font-size 28px
        a
          color #007AFF
          font-size 26px
      .select
        width 26px
        height 26px
        margin-right 10px
        border 1px solid #7f7f7f 
        &.selected
          background-image url("https://urswebzj.nosdn.127.net/webzj_cdn101/sprite_61fbe151ab715649c6b7c4ec39156201.png")
          background-repeat no-repeat
          background-position -323px -86px    
    .email-register
      display flex
      align-items center
      justify-content center
      width 670px
      height 90px
      font-size 28px
      margin-top 32px

</style>
