
<template>
  <div class="scrollTip">
    <div class="tip">
      <h4 class="txt">往下拉</h4>
      <div class="arr"></div>
      <h4 class="txt">填問券</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollTip',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang='sass'>

.scrollTip
  cursor: pointer
  position: sticky
  bottom: 0
  z-index: 5
  max-width: 860px
  height: 37px
  background-color: $dark
  width: 100%
  border-top: 4px solid $gold
  color: $gold
  display: flex
  justify-content: center
  .tip
    display: inline-block

    >*
      display: inline-block
      vertical-align: text-top
    .txt
      display: inline-block
      vertical-align: text-top
      margin: 10px 7px 0
      letter-spacing: 0.2em
      // margin-top: 5px

    .arr
      width: 0
      height: 0
      border-style: solid
      border-width: 25px 25px 0 25px
      border-color: #dcb776 transparent transparent transparent

</style>
