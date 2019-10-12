<template>
  <div class="topic">
    <div class="topic_nav" >
      <ul class="topicNav_list">
        <li class="item" v-for="(nav, index) in recommendTabs" :key="index" 
        :class="{active: recommendTabs[currentIndex] === nav}"
        @click="goto(index)"
        >
        <a href="javascript:void(0);" class="item">{{nav.tabName}}</a>
        </li>
      </ul>
    </div>

    <div class="recommends">
      <div class="ulList" v-if="recommendTData">
        <ul v-for="(recommend, index) in recommendTData" :key="index" class="content">
          <li v-for="(topic, index) in recommend.topics" :key="index">
            <RecommendList v-if="topic.style == 2" :topic="topic"></RecommendList>
            <ProductionList v-if="topic.style !== 2" :topic="topic"></ProductionList>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import ProductionList from '../components/ProductionList/ProductionList'
  import RecommendList from '../components/RecommendList/RecommendList'
  import BScroll from 'better-scroll'
  export default {
    name: 'TopicFind',
    data() {
      return {
        currentIndex: 0
      }
    },
    computed: {
      ...mapState({
        recommendTabs: state => state.recommend.recommendTabs,    
        recommendTData: state => state.recommend.recommendTData
      })    
    },
    async mounted() {
      await this.$store.dispatch('getRecommendTabs')
      this.$nextTick(() => {
        new BScroll('.recommends', {
          click: true,
          scrollY: true
        })
      })
    },
    methods: {
      goto(index) {
        this.currentIndex = index
      }
    },
    components: {
      ProductionList,
      RecommendList 
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .topic
    height 100%
    .topic_nav
      top-border-1px(#d9d9d9)
      display flex
      position fixed
      top 88px
      left 0
      width 100%
      overflow hidden
      font-size 28px
      background-color #fafafa
      .topicNav_list
        bottom-border-1px(#d9d9d9)
        display flex
        flex-flow row nowrap
        flex-shrink 0
        .item
          display flex
          justify-content center
          align-items center
          box-sizing border-box
          margin 0 6px
          a
            display inline-block
            padding 0 16px
            line-height 60px
            font-size 28px        
            color #7f7f7f
        .item.active
          box-sizing border-box
          min-width 90px
          color $red
          border-bottom 4px solid $red
    .recommends
      height 100%
      .content
        margin-top 150px
</style>
