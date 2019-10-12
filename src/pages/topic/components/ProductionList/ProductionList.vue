<template>
  <div class="productionList_wrapper"> 
    <Split></Split>
    <div class="recommend_rec recommend">
      <a href="javascript:void(0);" class="user_list">
        <div class="info">
          <div class="name">
            <span calss="avatar">
              <img :src="topic.avatar" />
            </span>
            <span>{{topic.nickname}}</span>
          </div>
          <div class="title">{{topic.title}}</div>
          <div class="desc">{{topic.subTitle}}</div>
          <div class="admire"><i class="iconfont icon-zanshang"></i><span>{{topic.readCount}}人看过</span></div>
        </div>
        <div class="pic">
          <img src="https://yanxuan.nosdn.127.net/c9eac8ed27f531c9fb45ac9e4add02d0.jpg?imageView&quality=65&thumbnail=272y272" alt="pic">
        </div>
      </a>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  // import {mapState} from 'vuex'
  export default {
    name: 'ProductionList',
    props: {
      topic: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    background #fff
    margin 20px 0
    padding 16px 30px
    border-sizing border-box
    a
      .name
        margin-bottom 20px
        font-size 26px
        color #333333
        display flex
        justify-items center
        align-items center
        img  
          display flex
          border-radius 50%
          width 50px
          height 50px
        span 
          margin-left 10px
      .title
        font-size 36px
        line-height 60px
        color #333333
        font-family PingFangSC-Regular  
      .admire
        display flex
        align-items center
        justify-items center
        margin-bottom -10px
        color #999
        margin-top 20px 
        i 
          display inline-block
          vertical-align middle 
          font-size 24px
        span 
          font-size 24px
          margin-left 8px
  .recommend_rec
    a
      display flex
      .desc
        padding-top 6px
 
</style>
