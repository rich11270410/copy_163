<template>
    <section class="manu-container">
      <div class="manu-header">
        <span class="left">品牌制造商直供</span>
        <div class="right">
          <span class="more">更多</span>
          <i class="iconfont icon-you"></i>
        </div>
      </div>
      <ul class="manu-list">
        <li>
          <span>海外制造商</span>
          <span>9.9元起</span>
        </li>
        <li>
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
        </li>
      </ul>
    </section>
</template>
<script>
  export default {
    name: 'Manufacturers'
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
        display flex
        flex-direction column
        align-items center
        width 343px
        height 260px
        background-repeat no-repeat
        background-size 100% 100%
        &:nth-of-type(1)
          margin 0 5px 5px 0
          background-image url("http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png")
        &:nth-of-type(2)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png")
        &:nth-of-type(3)
          margin 0 5px 5px 0
          background-image url("http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png")
        &:nth-of-type(4)
          margin-bottom 5px
          background-image url("http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png")
        span
          width 100%
          text-align center
          &:nth-of-type(1)
            padding-top 23px
            display flex
            justify-content center
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            color #333
            font-family PingFangSC-Medium
            font-size 28px
            line-height 34px
            margin-bottom 3px
          &:nth-of-type(2)
            font-size 24px
            color #777


</style>
