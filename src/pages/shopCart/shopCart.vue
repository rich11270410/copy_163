<template>
  <div id="shopContainer">
    <div class="shopHeader">
      <div class="shop-left">
        <span>购物车</span>
      </div>
      <div class="shop-right">
        <span>领券</span>
      </div>
    </div>
    <div class="shopContent">
      <ul>
        <li class="item">
          <i class="iconfont icon-yuanquan"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-yuanquan"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item">
          <i class="iconfont icon-yuanquan"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="login">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" />
        <span>去添加点什么吧</span>
        <button>登录</button>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ShopCart'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #shopContainer
    width 100%
    .shopHeader
      display flex
      align-items center
      width 100%
      height 88px
      background-color #fff
      .shop-left
        width 100%
        height 100%
        display flex
        align-items center
        padding 0 30px
        span 
          font-size 36px
      .shop-right
        position absolute
        right 30px
        color $red
        span 
          line-height 44px
          font-size 30px
    .shopContent 
      position fixed
      top 88px
      left 0
      bottom 0
      width 100%
      background-color #f4f4f4
      text-align center
      >ul
        display flex
        justify-content space-between
        align-items center
        background-color #eeeeee
        height 70px
        padding 0 30px
        .item
          display flex
          align-items center
          font-size 24px
          color #666
          i
            width 10px
            height 10px
            font-size 10px
            margin-right 10px 
      .login 
        position absolute
        left 50%
        bottom 380px
        transform translateX(-50%)
        span 
          display block
          margin-bottom 50px
          font-size 28px
          color #999999
        button 
          width 480px
          height 92px
          line-height 92px
          font-size 30px
          color #fff
          background-color $red
          border-radius 3px

</style>
