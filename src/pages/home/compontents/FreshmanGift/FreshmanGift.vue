<template>
  <section id="freshManContainer">
    <p class="name">- 新人专享礼 -</p>
    <div class="freshManWrapper">
      <div class="freshManLeft">
        <span class="giftName">新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包">
      </div>
      <div class="freshManRight">
        <div class="freshManRight-top">
          <div class="title">
            <p>福利社</p>
            <span>今日特价</span>
          </div>
          <img src="https://yanxuan-item.nosdn.127.net/9032e04ee24f14607f2a8b5635ebcd95.png?imageView&thumbnail=200x200&quality=75" alt="福利社">
        </div>
        <div class="freshManRight-bottom">
          <div class="title">
            <p>新人拼团</p>
            <span>1元起包邮</span>
          </div>
          <img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团">
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'FreshMan'
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
