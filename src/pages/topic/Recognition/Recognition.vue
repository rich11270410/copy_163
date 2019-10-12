<template>
  <div class="recognition_catainer">
    <Split></Split>
     <div class="recognition_wrapper">
      <div class="order_content">
        <div class="order_top">
          <div class="top_title">让生活更好的N种方式</div>
          <div class="top_subtitle">可爱值MAX的严选萌物</div>
          <div class="box_scroll">
            <ul class="top_scroll">
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
              </li>
            </ul>
          </div>
        </div>
        <split></split>
      </div>
        <div class="recognition_content">
          <div class="item2-title">TA们的严选生活</div>
          <div class="item-tab">
            <span class="active">最新</span>
            <span>本月最热</span>
            <span>晒单合辑</span>
          </div>
          <ul class="item2-details">
            <li>
              <img class="item2-img" src="https://yanxuan.nosdn.127.net/be1adcb32793b4b5d22473f25fa85625.jpg" alt="">
              <span class="item2-comment">挺好的，简约，加了个智能插座，连上小度音箱，小度小度开灯，小度小度关灯，挺方便</span>
              <div class="item2-bottom">
                <img class="item2-img2" src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="">
                <span class="item2-author">y****g</span>
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
                <span>0</span>
              </div>
            </li>
          </ul>
          <ul class="item2-details">
            <li>
              <img class="item2-img" src="https://yanxuan.nosdn.127.net/911ad3f5f8b3367934c3afd9a8b1b2c3.jpg" alt="">
              <span class="item2-comment">很好看的颜色，炖东西不错，小火炖不会益锅，这个尺寸两个人用足够了，炖肉煮小火锅之类的都ok，毕竟不是不粘锅，炒东西的话是容易粘的，另外质量不轻。</span>
              <div class="item2-bottom">
                <img class="item2-img2" src="https://yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png" alt="">
                <span class="item2-author">y****g</span>
                <i class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
                <span>0</span>
              </div>
            </li>
          </ul>
        </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll('.box_scroll',{
      click: true,
      scrollX:true
     })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recognition_catainer
    position absolute
    left 0
    top 0
    margin-top 88px
    width 100%
    .recognition_wrapper
      position relative
      .order_content
            padding-top 30px
            .order_top
              height 438px
              .top_title
                height 40px
                width 100%
                text-align center
                font-size 28px
                color #7f7f7f
              .top_subtitle
                height 48px
                width 100%
                margin-top 30px
                line-height 48px
                text-align center
                font-size 32px
                color #333
              .box_scroll
                height 240px
                margin 30px 0 30px 
                overflow hidden
                ul
                  float left
                  display flex
                  li
                    width 240px
                    height 240px
                    border-radius 15px
                    img 
                      width 100%
                      height 100%
                      border-radius 15px
      .recognition_content
        .item2-title
          margin-top 60px
          font-size 32px
          text-align center
          font-weight bold
        .item-tab
          margin 35px 0 35px
          display flex
          justify-content space-around
          font-size 28px
          span
            display flex
            align-items center
            background-color #f4f4f4
            border-radius 10px
            padding 10px 30px
            &.active
              background-color #ffe4af
              color #b0955f
              font-weight bold
      .item2-details
        display flex
        width 49% 
        margin 0  
        float left
        li
          width 345px
          margin 20px
          border 3px solid #cacaca
          border-radius 20px
          .item2-img   
            width 100% 
            border-radius 20px
          .item2-comment
            font-size 24px
            line-height 34px
            overflow hidden
            text-overflow ellipsis
          .item2-bottom
            display flex
            align-items center
            margin 30px 0 20px
            .item2-img2
              width 48px
              height 48px
              margin  0 18px 0 18px
            .item2-author
              font-size 24px
            .icon-changyongtubiao-xianxingdaochu-zhuanqu-
              font-size 16px
              margin 0 20px 0 100px
          &:last-child
            font-size 28px
            margin-right 20px

</style>
