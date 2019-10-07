<template>
  <div>
    <HeaderSlot>
      <div slot="fond"><span :class="{active: isFond}">发现</span></div>
      <div slot="specia_choice"><span :class="{active: !isFond}">甄选家</span></div>
    </HeaderSlot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isFond: true
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  // .specia_choice
 
</style>
