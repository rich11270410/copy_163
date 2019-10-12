<template>
  <div class="profileContainer">
   <div class="profileWrapper">
      <HeaderSlot>
      <span slot="netease" class="netease"></span>
    </HeaderSlot>
    <div class="loginTypesWrap" v-show="isShow">
      <div class="top_cont" >
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
        </div>
        <div class="button">
          <!-- <div class="login_phone"> -->
          <div class="login_phone" @click="gotoLogin('/profile/login', true)">
            <i class="iconfont icon-shouji"></i>
            <span>手机号快捷登录</span>
          </div>
          <div class="login_mail" @click="gotoLogin('/profile/login', false)">
            <i class="iconfont icon-email"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="login_quick" @click="gotoRegister('/profile/register', true)">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-you"></i>
          </div>
        </div>
      </div>
      <div class="bottom_nav">
        <div class="login_wechat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="login_qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="login_weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="content_box" v-show="!isShow">
      <routerView :setShow="setShow"></routerView>
    </div>
   </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
         isShow: true
      }
    },
    methods: {
      gotoLogin (path, isPhoneLogin) {
        this.isShow = false
        this.$router.replace({path, query: {isPhoneLogin}})
      },
      gotoRegister (path, isPhoneRegister) {
        this.isShow = false
        this.$router.replace({path, query: {isPhoneRegister}})
      },
      setShow () {
        this.isShow = true
      },
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .profileContainer
    position fixed
    // margin-top 88px
    width 100%
    height 100%
    .profileWrapper
      height 100%
      background #F2F5F4 
      .netease
        display block
        width 138px
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size cover
        background-position center
        margin-left 38px
      .top_cont
        .logo
          text-align center
          padding-top 160px
          padding-bottom 232px
          img 
            width 268px
            height 90px
        .button
          padding 0 38px
          box-sizing border-box
          .login_phone, .login_mail, .login_quick
            display flex
            align-items center
            justify-content center
            width 670px
            height 90px
            border 2px solid #DD1A21
            border-radius 2px
            font-size 28px 
            >i 
              font-size 32px
              margin-right 16px
          .login_phone  
            margin-bottom 32px
            background-color #DD1A21
            color #ffffff
          .login_mail 
            color #DD1A21
          .login_quick  
            border 0
            color #333333
            margin-top 20px
      .bottom_nav
        display flex
        justify-content center
        padding 0 30px
        .login_wechat, .login_qq, .login_weibo
          display flex
          align-items center
          color #7F7F7F
          font-size 28px
          margin 375px 0 100px 0
          >i
            font-size 28px 
            margin 0 6px 0 20px
        .login_wechat, .login_qq
          border-right 1px solid #979797
          padding 0 30px  
     .content_box
        background-color #ffffff 
        height 100%
        padding-top 88px
</style>
