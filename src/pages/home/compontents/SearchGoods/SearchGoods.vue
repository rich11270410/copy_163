<template>
  <div id="search_container">
    <div class="searchHeader">
      <label class="headerSearch">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="专业衣物除菌 除螨率100%" />
      </label>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    <div class="bottom_title">热门搜索</div>
    <nav class="list">
      <a class="item">出行必备 压缩袋7折</a>
      <a class="item">出行必备 压缩袋7折</a>
      <a class="item">出行必备 压缩袋7折</a>
      <a class="item">出行必备 压缩袋7折</a>
      <a class="item">出行必备 压缩袋7折</a>
      <a class="item">新西兰纯牛奶 限时特...</a>
      <a class="item">新西兰纯牛奶 限时特...</a>
      <a class="item">床垫</a>
      <a class="item">床垫</a>
      <a class="item">床垫</a>
      <a class="item">床垫</a>
      <a class="item">床垫</a>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #search_container
    width 100%
    position fixed
    .searchHeader
      display flex
      align-items center
      width 100%
      height 88px
      padding 0 30px
      box-sizing border-box
      .headerSearch
        height 56px
        line-height 56px
        border-radius 4px
        border none
        text-align center
        i
          display block
          position absolute
          width 60px
          font-size 30px
          color #666666
        >input
          display block
          width 550px
          height 100%
          padding-left 60px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 28px
          border-radius 4px
      .cancel
        display block
        margin-left 24px
        font-size 28px
        color #333
    .bottom_title
      display flex
      align-items center
      color #999999
      margin-left 30px
      height 90px
      font-size 28px
      background-color #fff
    .list
      display flex
      flex-wrap wrap
      padding 0 0 0 30px
      .item
        padding 0 15px
        margin-right 32px
        margin-bottom 32px
        line-height 46px
        font-size 24px
        color #333333
        border 1px solid #999999
        border-radius 4px
</style>
