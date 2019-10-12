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
          <li v-for="(item, index) in cate.categoryL1List" :key="index"
          @click="currentActive(index)"
          :class="{active: cate.categoryL1List[currentIndex]===item}"
          >
          {{item.name}}
          </li>
          <!-- <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li>
          <li><a href="javascript:void(0);">推荐专区</a></li> -->
        </ul>
      </div> 
      <div class="right-group" >
       <div class="list">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/db32d24cdd1d133d1e02fe47f300b58d.jpg?imageView&quality=75&thumbnail=0x196" />
              </div>
              <div class="swiper-slide">
                <img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196" />
              </div>
            <!-- 如果需要分页器 -->
            </div>
            <div class="swiper-pagination"></div>

        </div>
        <ul class="rightList" v-if="cate.categoryL1List">
          <li v-for="(list, index) in cate.categoryL1List[currentIndex].subCateList" :key="index">
            <div class="cate">
              <img v-lazy="list.bannerUrl" />
              <span>{{list.name}}</span>
            </div>
          </li>
        </ul>
       </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import 'swiper/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {
    name: 'Category',
    data() {
      return {
        currentIndex: 0 
      }
    },

    computed: {
      ...mapState({
        cate: state => state.category.cate
      })
    },

    async mounted() {
      await this.$store.dispatch('getCategory')

      this.$nextTick(() => {
        new BScroll('.left-nav', {
          click: true,
          scrollY: true
        })


         new BScroll('.right-group', {
          click: true,
          scrollY: true
        })

        console.log('1')
          //debugger;
        new Swiper ('.swiper-container', {
          autoplay: true,    //可选选项，自动滑动
          loop: true, // 循环模式选项
              // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
      })
      })
    },

    methods: {
      currentActive(index) {
        this.currentIndex = index
      }
    },  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
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
          li.active
            color $red
            border-left 6px solid $red
      .right-group    
        padding 0px 30px 10px
        box-sizing border-box
        // overflow hidden
        width 590px
        position relative

        .list
          padding-top 30px
          box-sizing border-box
          .swiper-container
            width 100%
            height 192px
            // overflow hidden
            .swiper-wrapper
              width 100%
              height 100%
              .swiper-slide
                width 100%
                height 100%
                img
                  height 100%
                  width 100%
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
