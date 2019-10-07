<template>
  <div class="categoryContainer">
    <div class="categoryHeader">
        <div class="headerSearch" @click="$router.push('/search')">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品，共23155件好物</span>
        </div>
    </div>
    <div class="categoryContent">
      <div class="left-nav">
        <ul class="navList">
          <li><a class="active">推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
          <li><a>推荐专区</a></li>
        </ul>
      </div>
      <div class="right-group">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/db32d24cdd1d133d1e02fe47f300b58d.jpg?imageView&quality=75&thumbnail=0x196" />
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196" />
              </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <ul class="rightList">
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" />
              <span>明星商品</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/020bc5a3cd3b57aff975fc2e5ee8f29a.png?imageView&quality=85&thumbnail=144x144" />
              <span>十一出游用品低至12.9</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" />
              <span>明星商品</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/020bc5a3cd3b57aff975fc2e5ee8f29a.png?imageView&quality=85&thumbnail=144x144" />
              <span>十一出游用品低至12.9</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" />
              <span>明星商品</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/020bc5a3cd3b57aff975fc2e5ee8f29a.png?imageView&quality=85&thumbnail=144x144" />
              <span>十一出游用品低至12.9</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" />
              <span>明星商品</span>
            </div>
          </li>
          <li>
            <div class="cate">
              <img src="https://yanxuan.nosdn.127.net/020bc5a3cd3b57aff975fc2e5ee8f29a.png?imageView&quality=85&thumbnail=144x144" />
              <span>十一出游用品低至12.9</span>
            </div>
          </li>
   
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import Swiper from 'swiper'
  export default {
    name: 'Category',
    mounted() {
      new Swiper ('.swiper-container', {
        autoplay: true,    //可选选项，自动滑动
        loop: true, // 循环模式选项
            // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .categoryContainer
    width 100%
    .categoryHeader
      position fixed
      left 0
      top 0
      z-index 5
      background-color #ffffff
      position relative
      display flex
      flex-flow row nowrap
      align-items center
      padding 16px 30px
      box-sizing border-box
      bottom-border-1px(#9d9d9d)
      .headerSearch
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
    .categoryContent
      display flex
      position absolute
      top 88px
      bottom 98px
      width 100%
      background #fff
      overflow hidden
      .left-nav
        flex 0 0 162px
        .navList
          padding 40px 0
          li
            position relative
            width 100%
            height 50px
            text-align center
            border none
            margin-top 40px
            &:nth-of-type(1)
              margin-top 0  
            a
              display block
              white-space nowrap
              font-size 28px
              line-height 50px
              text-overflow ellipsis
              overflow hidden
              color #333333
            a.active
              color $red
              border-left 6px solid $red
      .right-group    
        padding 30px 30px 10px
        overflow hidden
        position relative
        .swiper-container
          width 100%
          .swiper-slide
            width 100%
            height 100%
            img
              display block
              width 528px
              height 192px
        .rightList
          margin-top 20px
          display flex
          flex-wrap wrap
          >li
            width 144px
            height 216px
            margin-right 32px
            .cate
              >img
                display block
                width 100%
                height 100%
              >span 
                display block
                text-align center
                height 72px
                line-height 36px
                font-size 24px
                color #333
</style>
