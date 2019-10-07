<template>
  <header id="headerContainer">
    <!-- search -->
    <div class="headerSearch">
      <span class="logo"></span>
      <div class="searchInput" @click="$router.push('/search')">
       <i class="iconfont icon-search"></i>
       <span class="placeholder">搜索商品，共23084件好物</span>
      </div>
      <div class="loginBtn">登录</div>
    </div>
    <!-- nav -->
    <div class="headerNav"> 
      <div class="headerNav-left">
        <ul class="headerNav-list" @click="addActive($event)">
          <li>
            <a href="javascript:void(0);" :class="{active: cuttentA===0}">推荐</a>
          </li>
          <li>
            <a href="javascript:void(0);">居家生活</a>
          </li>
          <li>
            <a href="javascript:void(0);">服饰鞋包</a>
          </li>
          <li>
            <a href="javascript:void(0);">美食酒水</a>
          </li>
          <li>
            <a href="javascript:void(0);">个护清洁</a>
          </li>
          <li>
            <a href="javascript:void(0);">母婴亲子</a>
          </li>
          <li>
            <a href="javascript:void(0);">运动旅行</a>
          </li>
          <li>
            <a href="javascript:void(0);">数码家电</a>
          </li>
          <li>
            <a href="javascript:void(0);">全球特色</a>
          </li>
        </ul>
      </div>
      <div class="headerNav-right">
        <span class="linear"></span>
        <div class="icon">
          <span class="iconfont icon-xiala" :class="{is_open: isOpen}" @click="isOpen=!isOpen"></span>
        </div>    
      </div>
         <!-- isOpen -->
      <div class="navWrapper" v-show="isOpen">
        <p>全部频道</p>
        <ul class="navList">
          <li><a href="javascript:void(0);">推荐</a></li>
          <li><a href="javascript:void(0);">居家生活</a></li>
          <li><a href="javascript:void(0);">服饰鞋包</a></li>
          <li><a href="javascript:void(0);">美食酒水</a></li>
          <li><a href="javascript:void(0);">个户清洁</a></li>
          <li><a href="javascript:void(0);">母婴亲子</a></li>
          <li><a href="javascript:void(0);">运动旅行</a></li>
          <li><a href="javascript:void(0);">数码家电</a></li>
          <li><a href="javascript:void(0);">全球特色</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: 'HeaderTop',
    data() {
      return {
        isOpen: false,
        cuttentA: 0
      }
    },
    mounted() {
      this.$nextTick(() => {
        new BScroll('.headerNav-left', {
          click: true,
          scrollX: true
        })
      })
    },
    methods: {
      addActive (event) {
        // console.log(event)
        this.cuttentA = +event.target.dataset.thisIndex

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  #headerContainer
    position fixed
    top 0
    left 0
    z-index 200
    width 100%
    .headerSearch
      background-color #ffffff
      position relative
      display flex
      z-index 4
      flex-flow row nowrap
      align-items center
      padding 16px 30px
      box-sizing border-box
      .logo
        width 138px
        height 40px
        display inline-block
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-position center
        background-size cover
        margin-right 20px
      .searchInput
        display flex
        flex-grow 1
        flex-flow row nowrap
        align-items center
        justify-content center
        background-color #ededed
        height 56px
        border-radius 8px
        font-size 28px
        color #666
        i 
          display inline-block
          vertical-align middle
          font-weight bold
          font-size 30px
          margin-right 10px
      .loginBtn
        width 74px
        height 40px
        line-height 40px
        text-align center
        color $red
        border 1px solid $red
        margin-left 16px
        font-size 24px
        border-radius 8px
    .headerNav
      position relative
      width 100%
      z-index 2
      margin-top -1px
      // bottom-border-1px(#d9d9d9)
      .headerNav-left
        background-color #ffffff
        display flex
        flex-flow row nowrap
        overflow hidden
        .headerNav-list
          display flex
          flex-flow row nowrap
          flex-shrink 0
          padding 0 30px
          li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            margin-left 20px
            &:first-of-type
              margin-left 0
            a
              display inline-block
              padding 0 16px
              line-height 60px
              font-size 28px
              color #333
              text-align center
            a.active
              box-sizing border-box
              min-width 90px
              color $red
              border-bottom 4px solid $red
      .headerNav-right  
        position absolute
        z-index 2
        top 0
        right 0
        display flex 
        flex-grow 0
        align-items center
        justify-content center
        .linear
          width 60px
          height 60px 
          background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
        .icon
          display flex
          justify-content center
          align-items center
          width 100px
          height 60px
          text-align center
          background #fff
        .iconfont
          font-size 26px
          color #333
          transition transform .5s
          &.is_open
            transform rotateZ(180deg)
      .navWrapper
        position absolute
        left 0
        top 0
        width 100%
        background-color #ffffff
        >p
          height 60px
          line-height 60px
          padding-left 30px
          font-size 28px
          color #333
          display flex
          align-items center
        .navList
          display flex 
          flex-wrap wrap
          justify-content flex-start
          padding-top 15px
          overflow hidden
          >li
            width 150px
            height 56px
            line-height 56px
            text-align center
            margin-bottom 40px
            margin-left 30px
            background #FAFAFA
            border 1px solid #CCC
            border-radius 4px
            >a 
              color #333
              font-size 24px
</style>
