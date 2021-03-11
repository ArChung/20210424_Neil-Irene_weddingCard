<template>
  <div class="thanksPop">
    <div class="bg" @click="clozPop"></div>

    <div class="container">
      <transition name="fade">
        <div v-show="!isSending">
          <div class="clozBtn" @click="clozPop"></div>
          <h1 class="goldTxt mt-1 ta-c ls-1 fw-b">炸彈上路</h1>
          <h3 class="wTxt mt-1 ta-c">BOMB IS ON THE WAY</h3>
          <img :src="picUrl" alt class="mt-2" />
          <div class="d-f mt-5 jc-sb">
            <a
              href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MGo3bTY3Zjlva3ZwcHBvZGIza2RudG11dnEgazdqMmJwNXJiZGpyNWc0dTRzMDVuYmhxczRAZw&tmsrc=k7j2bp5rbdjr5g4u4s05nbhqs4%40group.calendar.google.com"
              target="_blank"
              class="txtBtn"
              @click='onCalender()'
            >我金魚我需要提醒</a>
            <a href="https://www.google.com/maps/place/%E5%BD%AD%E5%9C%92%E5%8F%B0%E5%8C%97%E9%A4%A8%EF%BD%9C%E5%A9%9A%E5%AE%B4%E5%A0%B4%E5%9C%B0+%C2%B7+%E6%98%A5%E9%85%92%E5%B0%BE%E7%89%99+%E2%80%A7+%E5%85%AC%E5%8F%B8%E8%81%9A%E9%A4%90+%E2%80%A7+%E5%AE%B6%E5%BA%AD%E8%81%9A%E9%A4%90+%C2%B7+%E7%BE%8E%E9%A3%9F%E9%A4%90%E5%BB%B3/@25.0410972,121.5712084,17z/data=!3m1!4b1!4m5!3m4!1s0x3442aba36939324f:0x71260f1793fa7d04!8m2!3d25.0410972!4d121.5733971" @click='onMap()' target="_blank" class="txtBtn">我路癡我需要帶路</a>
          </div>
        </div>
      </transition>
      <div  v-show="isSending">
        <h2 class="goldTxt ta-c ls-1 fw-b load">炸彈訂單處理中</h2>
        <h3 class="grayTxt mt-2 ta-c">究竟會不會成功呢</h3>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ThankPop',
  props: [
    'isSending',
  ],
  data() {
    return {
      uu: '123',
      gifs: [
        'https://media.giphy.com/media/26tnoLlWMAUosSvuM/giphy.gif',
        'https://media.giphy.com/media/xUOxeXt41UOYRusw4E/giphy.gif',
        'https://media.giphy.com/media/e2gVVjM3amp6o/giphy.gif',
        'https://media.giphy.com/media/3rXs5J0hZkXwTZjuvM/giphy.gif',
        'https://media.giphy.com/media/QT9SVRVexMgOk/giphy.gif',
        'https://media.giphy.com/media/aW8GS805yvx3W/giphy.gif',
        'https://media.giphy.com/media/umx6jg60LvDZC/giphy.gif',
        'https://media.giphy.com/media/B7HroiUqNPv1e/giphy.gif',
        'https://media1.tenor.com/images/87611a901ac6fd8a79bb1c7c2e5f3e49/tenor.gif?itemid=15429820',
        'https://media1.tenor.com/images/76b0c6808fc1f665f7efd60896abc824/tenor.gif?itemid=4118922',
        'https://media1.tenor.com/images/2cbe796de7fcdf076e7d581a35254b10/tenor.gif?itemid=15030119',
      ],
      picUrl: '',
    };
  },
  methods: {
    clozPop() {
      this.$emit('clozPop');
    },
    onCalender() {
      this.$ga.event('onCalender', 'click', 'label', 'value');
    },
    onMap() {
      this.$ga.event('onMap', 'click', 'label', 'value');
    },
  },
  beforeUpdate() {
    const arr = this.gifs;
    this.picUrl = arr[Math.floor(Math.random() * arr.length)];
  },
};
</script>


<style lang="sass" scoped>


@keyframes load
  0%
    opacity: 1
  50%
    opacity: .6
  100%
    opacity: 1
.load
  animation-name: load
  animation-duration: .1s
  animation-iteration-count: infinite
.thanksPop
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 20
  display: flex
  justify-content: center
  align-items: center
  padding: 25px
  .bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(black,.6)
  .container
    width: 100%
    max-width: 600px
    padding: 60px 90px
    background-color: rgba($dark,.9)
    min-width: 300px
    position: relative
    z-index: 2
    border: 1px solid rgba($gold,.5)
    transition-duration: .3s
    +phone
      padding: 60px 50px
    img
      display: block
      margin: 0 auto
      width: 100%
      display: block
  .clozBtn
    position: absolute
    top: 25px
    right: 20px
    cursor: pointer
    background-image: url(~@/assets/cloz.png)
    width: 60px
    height: 60px
      // max-width: 400px
</style>
