<template>
  <footer class="footerContainer">
    <ul class="footerNav">
      <li class="item" :class="{active: $route.path === '/home'}" @click="goto('/home')">
        <i class="u-icon" :class="$route.path === '/home' ? 'u-icon-tabBar-index-active' : 'u-icon-tabBar-index'"></i>
        <span>首页</span>
      </li>
      <li class="item" :class="{active: $route.path === '/category'}" @click="goto('/category')">
        <i class="u-icon" :class="$route.path.includes('/category')? 'u-icon-tabBar-cate-active' : 'u-icon-tabBar-cate'"></i>
        <span>分类</span>
      </li>
      <li class="item" :class="{active: $route.path === '/topic'}" @click="goto('/topic')">
        <i class="u-icon" :class="$route.path.includes('/topic') ? 'u-icon-tabBar-topic-active' : 'u-icon-tabBar-topic'"></i>
        <span>识物</span>
      </li>
      <li class="item" :class="{active: $route.path === '/shopcart'}" @click="goto('/shopcart')">
        <i class="u-icon" :class="$route.path === '/shopcart' ? 'u-icon-tabBar-cart-active' : 'u-icon-tabBar-cart'"></i>
        <span>购物车</span>
      </li>
      <li class="item" :class="{active: $route.path === '/profile'}" @click="goto('/profile')">
        <i class="u-icon" :class="$route.path === '/profile' ? 'u-icon-tabBar-profile-active' : 'u-icon-tabBar-profile'"></i>
        <span>个人</span>
      </li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'FooterGuide',
    methods: {
      goto (path) {
        //如果当前请求路由不是path路径
        if (this.$route.path !== path) {
          this.$router.replace(path)
        } else {//如果请求的是当前的，直接强制刷新
          window.location.reload()
        }
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footerContainer
    top-border-1px(#d9d9d9)
    position fixed
    width 100%
    height 98px
    z-index 5
    left 0
    bottom 0
    background #fff
    .footerNav
      width 100%
      height 100%
      display flex
      flex-flow row nowrap
      align-items center
      .item
        display flex
        flex 1
        flex-direction column
        align-items center
        color #666666 
        &.active
          color $red
        .u-icon
          width 40px
          height 40px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
          background-repeat no-repeat
          background-size 40px 490px
      
        .u-icon-tabBar-index
          background-position 0 -250px
      
        .u-icon-tabBar-index-active
          background-position 0 -200px
      
        .u-icon-tabBar-cate
          background-position 0 -150px
      
        .u-icon-tabBar-cate-active
          background-position 0 -100px
      
        .u-icon-tabBar-topic
          background-position 0 -350px
      
        .u-icon-tabBar-topic-active
          background-position: 0 -300px
  
        .u-icon-tabBar-cart-active
          background-position 0 0
          
        .u-icon-tabBar-cart
          background-position 0 -50px
          
        .u-icon-tabBar-profile
          background-position 0 -450px
  
        .u-icon-tabBar-profile-active
          background-position 0 -400px
          
        span
          display block
          font-size 24px
          margin-top 7px
</style>
