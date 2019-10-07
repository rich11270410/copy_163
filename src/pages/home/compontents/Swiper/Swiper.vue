<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(imgNode, index) in imgNodes" :key="index">
        <img :src="imgNode" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {
    name: 'Swiper',
    data() {
      return {
        imgNodes: [
          "https://yanxuan.nosdn.127.net/866adf55cbd68253d09855e382cb778b.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/6746f9dcaebe5a546a74762253a3cb83.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/0e4c3779545a6d3a4e4b02625b08ac9e.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/ba5e8c323035b6976f32579398d0057d.jpg?imageView&quality=75&thumbnail=750x0",
          "https://yanxuan.nosdn.127.net/f43e222c012a6de59b4a99103ac8a739.jpg?imageView&quality=75&thumbnail=750x0"
        ]
      }
    },
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
  .swiper-container
    position relative
    padding-top 147px 
    width 100%
    height 100%
    box-sizing border-box
    .swiper-slide
      width 100%
      height 100%
      img
        width 100%
        height 100%
        display inline-block
    .swiper-pagination
      bottom 30px
      >>>span.swiper-pagination-bullet
        width 40px
        height 4px
        display inline-block
        background #fff
        opacity 0.4
        border-radius 0
        margin 0 10px 0 0
      >>>span.swiper-pagination-bullet-active
        opacity 1
        background #fff
        border-radius 0
</style>
