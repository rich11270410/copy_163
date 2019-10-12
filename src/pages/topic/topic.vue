<template>
  <div class="topic_wrapper">
    <HeaderSlot>
      <div slot="fond" @click="isFond=true;$router.replace('/topic/find')"><span :class="{active: $route.path==='/topic/find'}">发现</span></div>
      <div slot="specia_choice" @click="isFond=false;$router.replace('/topic/recognition')"><span :class="{active: $route.path==='/topic/recognition'}">甄选家</span></div>
    </HeaderSlot>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: 'Topic',
    data() {
      return {
        isFond: true
      }
    },
    async mounted() {
      //await this.$store.dispatch('getRecommendTabs')
      await this.$store.dispatch('getRecommendTData')
      this.$nextTick(() => {
        new BScroll('.topic_nav', {
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topic_wrapper
    height 100%
    .container
      height 100%
</style>
