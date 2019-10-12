<template>
  <div class="servicePolicyContainer">
    <ul class="servicePolicyList">
      <li class="item"  v-for="(descList, index) in home.policyDescList" :key="index">
        <a href="javascript:void(0);" >
          <!-- <i class="u-icon u-icon-servicePolicy-index"></i> -->
          <!-- <i>{{home.policyDescList[0].desc}}</i> -->
          <span class="text">{{descList.desc}}</span>
        </a>
      </li>
      <!-- <li class="item">
        <a href="javascript:void(0);">
          <i class="u-icon icon-tuihuobaozhang iconfont"></i>
          <span class="text">30天无忧退货</span>
        </a>
      </li>
      <li class="item">
        <a href="javascript:void(0);">
          <i class="u-icon icon-tuikuan iconfont"></i>
          <span class="text">48小时快速退款</span>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'ServicePoicy',
     computed: {
      ...mapState({
        home: state => state.home.homeData
      })    
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  .servicePolicyContainer
    background-color #ffffff
    .servicePolicyList
      display flex
      align-items center
      flex-flow row nowrap
      width 100%
      height 72px
      padding 0 30px
      box-sizing border-box
      .item
        flex 1
        a
          display inline-block
          .u-icon-servicePolicy-index
            display inline-block
            vertical-align middle
            background-image url(https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
            background-repeat no-repeat
            background-size 100% 100%
            width 32px
            height 32px
          .iconfont
            vertical-align middle
            font-size 32px
            color $red
          .text
            display inline-block
            vertical-align middle 
            margin-left 8px
            line-height 32px
            font-size 24px
            color #333
</style>
