<template>
  <div>
    <HeaderTop v-show="$route.meta.showHeader"></HeaderTop>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import HeaderTop from './components/HeaderTop/HeaderTop'
  export default {
    name: 'App',
    components: {
      HeaderTop,
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    font-size 30px
 
</style>
