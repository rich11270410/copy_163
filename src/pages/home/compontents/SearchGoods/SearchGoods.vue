<template>
  <div id="search_container">
    <div class="search_wrapper">
      <div class="searchHeader">
        <label class="headerSearch">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-x" @click="searchValue=''" v-if="searchValue"></i>
          <input type="text" placeholder="请输入您需要查询的内容" v-model="searchValue" @input="toSearch" >
        </label>
        <span class="cancel" @click="$router.back()">取消</span>
      </div>
              <!-- show list -->
        <div v-if="searchValue" class="showlist">
          <ul class="isShow">
            <li class="isShowList" v-for="(search, index) in searchResult" :key="index">{{search}}</li>
          </ul>
        </div>

      <div class="bottom_title" v-if="!searchValue">热门搜索</div>
      <nav class="list" v-if="!searchValue">
        <a class="item" v-for="(item, index) in search.hotKeywordVOList" :key="index"
        :class="{highlight: item.highlight === 1}"
        >{{item.keyword}}</a>
      </nav>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'SearchGoods',
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapState({
        search: state => state.initSearch.search,
        searchResult: state => state.initSearch.searchResult
        
      })
    },
    async mounted() {
      await this.$store.dispatch('getSearch')
    },
    methods: {
      toSearch () {
        clearTimeout(this.timerId)
        this.timerId = setTimeout( ()=>{
           this.$store.dispatch('getSearchResult', this.searchValue)
        }, 300)
      }
}
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../common/stylus/mixins.styl"
  #search_container
    width 100%
    position fixed
    background-color #eeeeee
    height 100%
    .search_wrapper
      background-color #ffffff
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
          .icon-search
            display block
            position absolute
            width 60px
            font-size 30px
            color #666666
          .icon-x
            position absolute
            right 0
            margin-right 120px
            font-size 28px
            z-index 1
            color #959595
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
            color #333333
        .cancel
          display block
          margin-left 24px
          font-size 28px
          color #333 
      
      .showlist
        position fixed
        top 88px
        left 0
        z-index 99
        background #fff
        width 100%
        .isShow
          background-color #ffffff
          padding 0 30px
          .isShowList
            width 100%
            height 60px
            font-size 28px
            line-height 60px
            border-bottom 1px solid #eee
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
          border-radius 2px
          &.highlight
            border 1px solid $red
            color $red
</style>
