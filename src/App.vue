<template>
  <div id="app">
    <div class="mainContainer">
      <TopBanner id="topBanner"></TopBanner>
      <ScrollTip v-scroll-to="{ element: '#weddingForm', duration: 1200 }"></ScrollTip>
      <WeddingForm
        id="weddingForm"
        @sendForm="onSendForm"
        @sendForm_success="onSendForm_success"
        @sendForm_error="onSendForm_error"
      ></WeddingForm>
      <ScrollTip2 v-scroll-to="{ element: '#topBanner', duration: 2000 }"></ScrollTip2>
      <BottomBanner></BottomBanner>
      <transition name="fade">
        <ThanksPop v-show="showThanksPop" :isSending="isSending" @clozPop="clozPop"></ThanksPop>
      </transition>
      <div id="bottom"></div>
    </div>
  </div>
</template>

<script>
import TopBanner from './components/TopBanner.vue';
import ScrollTip from './components/ScrollTip.vue';
import ScrollTip2 from './components/ScrollTip2.vue';
import WeddingForm from './components/WeddingForm.vue';
import BottomBanner from './components/BottomBanner.vue';
import ThanksPop from './components/ThanksPop.vue';

import 'reset-css';

export default {
  name: 'app',
  components: {
    TopBanner,
    ScrollTip,
    ScrollTip2,
    WeddingForm,
    BottomBanner,
    ThanksPop,
  },
  data() {
    return {
      showThanksPop: false,
      isSending: true,
    };
  },
  methods: {
    clozPop() {
      this.showThanksPop = false;
      // const cancelScroll = VueScrollTo.scrollTo('#bottom');
      // cancelScroll = this.$scrollTo(element, duration, options)
      this.$scrollTo('#bottom', 3000);
      this.$ga.event('clozThxPop_goBottom', 'click', 'label', 'value');
    },
    onSendForm() {
      this.showThanksPop = true;
      this.isSending = true;
      this.$ga.event('onSendForm', 'click', 'label', 'value');
    },
    onSendForm_success() {
      this.showThanksPop = true;
      this.isSending = false;
      this.$ga.event('onSendForm_success', 'click', 'label', 'value');
    },
    onSendForm_error() {
      alert('人有失足馬有亂蹄，程式沒寫好有BUG，是可以原諒的，喝杯茶我們休息一下，等一下再試，我們不要那麼急');
      this.showThanksPop = false;
      this.$ga.event('onSendForm_error', 'click', 'label', 'value');
    },
  },
  created() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    const bIsAndroid = sUserAgent.match(/android/i) === 'android';
    if (bIsAndroid) {
      const uiWidth = 580;
      const deviceWidth = window.innerWidth;
      const getTargetDensitydpi = uiWidth / deviceWidth * window.devicePixelRatio * 160;
      const targetDensitydpi = `target-densitydpi=${getTargetDensitydpi}, width=580, user-scalable=no`;
      document.getElementsByName('viewport')[0].setAttribute('content', targetDensitydpi);
    }
  },
};
</script>

<style lang="sass">
#app
  background-color: #151617
  min-height: 100vh

.mainContainer
  max-width: 860px
  margin: 0 auto
  min-height: 100vh
  background-color: #232729

html
  font-family: "微軟正黑體","Microsoft JhengHei", "STHeiti Light", "STHeiti", Arial, sans-serif
input:focus
  outline: 0

</style>
