<template>
  <div id="headerContainer_slot">
    <div class="slot_left" @click="$router.replace('/home')">
      <i class="iconfont icon-shouye"></i>
    </div>
    <div class="slot_center">
      <slot name="netease"></slot><!--网易严选-->
      <slot name="fond"></slot><!--发现-->
      <slot name="specia_choice"></slot><!--甄选家-->
    </div>
    <div class="slot_right">
      <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.replace('/shopcart')"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'HeaderSlot'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #headerContainer_slot
    display flex
    align-items center
    justify-content space-between
    background-color #fafafa
    padding 0 16px 0 24px
    height 88px
    bottom-border-1px(#d9d9d9)
    .slot_left
      i 
        font-size 50px
        line-height 88px
    .slot_right
      i 
        font-size 50px
        line-height 88px
        margin-right 5px
  
</style>

