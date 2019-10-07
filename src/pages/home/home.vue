<template>
  <div>
    <Swiper></Swiper>
    <ServicePolicy></ServicePolicy>
    <UserNav></UserNav>
    <Split></Split>
    <FreshmanGift></FreshmanGift>
    <Split></Split>
    <Manufacturers></Manufacturers>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from './compontents/Swiper/Swiper'
  import ServicePolicy from './compontents/ServicePolicy/ServicePolicy'
  import UserNav from './compontents/UserNav/UserNav'
  import FreshmanGift from './compontents/FreshmanGift/FreshmanGift'
  import Manufacturers from './compontents/Manufacturers/Manufacturers'
  export default {
    components: {
      Swiper,
      ServicePolicy,
      UserNav,
      FreshmanGift,
      Manufacturers
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
