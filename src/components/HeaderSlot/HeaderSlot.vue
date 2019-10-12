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
      <i class="iconfont icon-gouwuche" @click="$router.push('/shopcart')"></i>
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
    position fixed 
    left 0
    top 0
    z-index 100
    // bottom-border-1px(#9d9d9d)
    width 100%
    height 88px
    padding 0 20px 0 18px
    box-sizing border-box
    font-size 42px
    display flex
    align-items center
    justify-content space-between
    background-color #fafafa
    color #333333
    .slot_left
      i 
        font-size 50px
        line-height 88px
    .slot_center
      display flex
      color #7f7f7f
      margin-left 36px
      font-size 28px
      span:last-child
        padding 0 12px
        vertical-align middle
      span.active
        font-size 30px
        font-weight bold
        color $red
    .slot_right
      i 
        font-size 50px
        line-height 88px
        margin-right 5px
  
</style>

