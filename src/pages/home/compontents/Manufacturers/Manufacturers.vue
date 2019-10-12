<template>
    <div class="manu-container">
      <div class="manu-header">
        <span class="left">品牌制造商直供</span>
        <div class="right">
          <span class="more">更多</span>
          <i class="iconfont icon-you"></i>
        </div>
      </div>
      <ul class="manu-list">
        <li v-for="(tag, index) in home.tagList" :key="index">
          <img :src="tag.picUrl" />
          <div class="list-top">
            <span>{{tag.name}}</span>
            <div>
              <span>{{tag.floorPrice}}元起</span>
            </div>
          </div>
        </li>
        <!-- <li>
          <span>CK制造商</span>
          <span>32.9元起</span>
        </li>
        <li>
          <span>Nine West 制造商</span>
          <span>219元起</span>
        </li>
        <li>
          <span>新秀丽制造商</span>
          <span>34.9元起</span>
        </li> -->
      </ul>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Manufacturers',
     computed: {
      ...mapState({
        home: state => state.home.homeData
      })    
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .manu-container
    padding 0 20px 20px 30px
    .manu-header
      display flex
      justify-content space-between
      height 100px
      line-height 100px
      color #333333
      .left
        font-family PingFangSC-Regular
        font-size 32px
      .right
        display flex
        .more
          display block
          font-size 28px
        i
          display block
          font-size 30px
    .manu-list
      width 100%
      display flex
      flex-wrap wrap
      li
        position relative
        display flex
        flex-direction column
        align-items center
        width 343px
        height 260px
        margin 2px
        img 
          width 100%
          height 100%
        .list-top
          position absolute
          top 0
          text-align center
          margin-top 24px
          span 
            font-family PingFangSC-Medium
            font-size 28px
            color #333
          div
            span 
              margin top 3px
              color #7F7F7F
              font-size: 26px




</style>
