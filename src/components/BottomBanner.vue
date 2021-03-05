
<template>
  <div class="pic">
    <div class="innerPic"></div>
  </div>
</template>

<script>
export default {
  name: 'BottomBanner',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang='sass'>
.pic
  position: relative
  overflow: hidden
  &:before
    display: block
    content: ""
    width: 100%
    padding-top: 1290 / 860 * 100%
  > *
    position: absolute!important
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 1
    background-size: cover
  .innerPic
    background-image: url(~@/assets/bBanner.png)
</style>
