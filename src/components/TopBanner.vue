<template>
  <div class="topBanner">
    <Parallax :speed-factor=".5" breakpoint="(min-width: 80px)" direction="down">
      <div class="bg6 bg screenSize"></div>
    </Parallax>

    <Parallax :speed-factor=".4" breakpoint="(min-width: 80px)" direction="down">
      <div class="bg5 bg screenSize"></div>
    </Parallax>

    <Parallax :speed-factor=".2" breakpoint="(min-width: 80px)" direction="down">
      <div class="bg4 bg screenSize"></div>
    </Parallax>
    <swiper class="banner screenSize" :options="swiperOption">
      <div class="swiper-slide s1"></div>
      <div class="swiper-slide s2"></div>
      <div class="swiper-slide s3"></div>
      <div class="swiper-slide s4"></div>
    </swiper>
    <div class="bg3 bg screenSize"></div>
    <div class="bg2 bg screenSize"></div>
    <div class="bg1 bg screenSize"></div>
    <div class="name n1 screenSize"></div>
    <div class="name n2 screenSize"></div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy';

export default {
  name: 'TopBanner',
  components: {
    Parallax,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        direction: 'vertical',
        // spaceBetween: 800,
        speed: 1000,
        roundLengths: true,
        autoplay: {
          delay: 800,
        },

      },
    };
  },
};
</script>

<style lang='sass'>
// @import "compass/css3"

// =bg($pic-name)
//   width: image-width("~@/assets/#{$pic-name}")
//   height: image-height("~@/assets/#{$pic-name}")
//   background-image: url("~@/assets/#{$pic-name}")
.screenSize
  position: relative
  &:before
    display: block
    content: ""
    width: 100%
    padding-top: 978 / 860 * 100%
  > *:not(.name)
    position: absolute!important
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 1
    // background-size: cover
.topBanner
  position: relative
  overflow: hidden
  .bg
    background-size: cover
  &:before
    display: block
    content: ""
    width: 100%
    padding-top: 978 / 860 * 100%
  > *:not(.name)
    position: absolute!important
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 1
    // background-size: cover
  .name
    position: absolute!important
    width: 100%
    height: 100%
    top: 0
    left: 0
    z-index: 1
  .n1
    // left: 25px
    // width: 130px
    // height: 19px
    background-image: url(~@/assets/name01.png)
  .n2
    // right: 25px
    // width: 179px
    // height: 19px
    background-image: url(~@/assets/name02.png)
  @for $i from 1 through 6
    .bg#{$i}
      background-image: url(~@/assets/top-0#{$i}.png)
  .banner

    @for $i from 1 through 4
      .s#{$i}
        background-image: url(~@/assets/top-04-#{$i}.png)
        background-size: cover
</style>
