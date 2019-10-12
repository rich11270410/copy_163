<template>
  <div id="freshManContainer">
    <p class="name">- 新人专享礼 -</p>
    <div class="freshManWrapper">
      <div class="freshManLeft">
        <span class="giftName">新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="freshManRight" v-if="home.indexActivityModule">
        <div class="freshManRight-top">
          <div class="title">
            <p>{{home.indexActivityModule[0].title}}</p>
            <span>{{home.indexActivityModule[0].subTitle}}</span>
          </div>
          <img :src="home.indexActivityModule[0].picUrl" alt="福利社">
        </div>
        <div class="freshManRight-bottom">
          <div class="title">
            <p>新人拼团</p>
            <span>{{home.indexActivityModule[1].tag}}</span>
          </div>
          <img :src="home.indexActivityModule[1].picUrl" alt="新人拼团">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
   import {mapState} from 'vuex'
  export default {
    name: 'FreshmanGift',
     computed: {
      ...mapState({
        home: state => state.home.homeData
      })    
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #freshManContainer
    padding 0 30px
    margin-bottom 30px
    .name
      width 100%
      font-size 32px
      font-family PingFangSC-Regular
      height 90px
      line-height 90px
      text-align center
    .freshManWrapper
      display flex
      .freshManLeft
        flex 5
        width 343px
        height 434px
        background #F9E9CF
        border-radius 4px
        margin-right 4px
        color #333333
        .giftName
          display block
          font-family PingFangSC-Medium
          font-size 32px
          padding 30px 0 0 30px
          box-sizing border-box
        img 
          position relative
          display block
          margin 37px auto
          width 258px
          height 257px
      .freshManRight
        flex 5
        .freshManRight-top, .freshManRight-bottom
          display flex
          justify-content space-around
          margin-bottom 5px
          border-radius 4px
          padding 15px 0 0 30px
          box-sizing border-box
          img
            width 200px
            height 200px
          .title
            display flex
            flex-shrink 0
            flex-direction column
            margin-top 10px
          p
            font-family PingFangSC-Medium
            font-size 32px
            color #333333
        .freshManRight-top
          flex 5
          background-color #FBE2D3
          span 
            font-size 24px
            margin-top 10px
            color #7F7F7F

        .freshManRight-bottom
          flex 5
          background-color #FFECC2
          span 
            position relative
            display inline-block
            text-align center
            margin-top 10px
            padding 0 10px
            height 32px
            line-height 32px
            background #CBB693
            border-radius 4px
            font-size 22px
            color #fff
            

        
</style>
