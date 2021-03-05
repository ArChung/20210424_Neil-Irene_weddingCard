
<template>
  <div class="scrollTip" >
    <div class="tip">
      <h4 class="txt">回到</h4>
      <div class="arr"></div>
      <h4 class="txt">頂端</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTip2',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang='sass'>

.scrollTip
  position: sticky
  top: 0
  z-index: 5
  max-width: 860px
  height: 37px
  background-color: $dark
  width: 100%
  border-bottom: 4px solid $gold
  color: $gold
  display: flex
  justify-content: center
  padding-top: 10px
  cursor: pointer
  .tip
    display: inline-block

    >*
      display: inline-block
      vertical-align: text-top
    .txt
      display: inline-block
      vertical-align: text-top
      margin: 0px 7px 10px
      letter-spacing: 0.2em
      // margin-top: 5px

    .arr
      width: 0
      height: 0
      border-style: solid
      border-width: 0px 25px 25px 25px
      border-color:  transparent transparent #dcb776 transparent

</style>
