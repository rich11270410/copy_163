<template>
  <div class="userNavCantainer">
    <ul class="userNavList" v-if="home.kingKongModule">
      <li v-for="(navList,index) in home.kingKongModule.kingKongList" :key="index">
        <a href="javascript:void(0);">
          <img :src="navList.picUrl" alt="新品首发">
          <span class="text">{{navList.text}}</span>
        </a>
      </li>
  
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'UserNav',
     computed: {
      ...mapState({
        home: state => state.home.homeData
      })    
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .userNavCantainer
    .userNavList
      display flex
      flex-wrap wrap
      padding-bottom 40px
      box-sizing border-box
      li
        width 110px
        height 156px
        margin 10px 20px 0
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          img 
            display block
            width 110px
            height 110px
          .text
            margin-top 10px
            font-size 24px
            line-height 36px
            color #333
            white-space nowrap

  
</style>
