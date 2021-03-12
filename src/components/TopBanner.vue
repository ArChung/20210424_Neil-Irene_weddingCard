<template>
  <div class="topBanner">
    <div class="bg">
      <img src="~@/assets/back.png" alt="">
    </div>
    <swiper class="banner " :options="swiperOption">
      <div class="swiper-slide s">
        <img src="~@/assets/text04.png" alt="">
      </div>
      <div class="swiper-slide s">
        <img src="~@/assets/text01.png" alt="">
      </div>
      <div class="swiper-slide s">
        <img src="~@/assets/text02.png" alt="">
      </div>
      <div class="swiper-slide s">
        <img src="~@/assets/text03.png" alt="">
      </div>
    </swiper>
    <div class="front">
      <img src="~@/assets/front.png" alt="">
    </div>

    <!-- <div class="bg3 bg screenSize"></div>
    <div class="bg2 bg screenSize"></div>
    <div class="bg1 bg screenSize"></div>
    <div class="name n1 screenSize"></div>
    <div class="name n2 screenSize"></div> -->
  </div>
</template>

<script>

export default {
  name: 'TopBanner',
  data() {
    return {
      swiperOption: {
        loop: true,
        direction: 'vertical',
        // spaceBetween: 800,
        speed: 1200,
        roundLengths: true,
        autoplay: {
          delay: 600,
        },

      },
    };
  },
};
</script>

<style lang='sass'>
.topBanner
  position: relative
  overflow: hidden
  img
    display: block
    width: 100%
    max-width: 100%

  .front
    position: absolute
    top: 0
    left: 0
    z-index: 5

  .banner
    width: 100%
    height: 975px
    position: absolute
    top: 0
    left: 0
    z-index: 2


// @import "compass/css3"

// =bg($pic-name)
//   width: image-width("~@/assets/#{$pic-name}")
//   height: image-height("~@/assets/#{$pic-name}")
//   background-image: url("~@/assets/#{$pic-name}")
// .screenSize
//   position: relative
//   &:before
//     display: block
//     content: ""
//     width: 100%
//     padding-top: 978 / 860 * 100%
//   > *:not(.name)
//     position: absolute!important
//     width: 100%
//     height: 100%
//     top: 0
//     left: 0
//     z-index: 1
//     // background-size: cover
// .topBanner
//   position: relative
//   overflow: hidden
//   .bg
//     background-size: cover
//   &:before
//     display: block
//     content: ""
//     width: 100%
//     padding-top: 978 / 860 * 100%
//   > *:not(.name)
//     position: absolute!important
//     width: 100%
//     height: 100%
//     top: 0
//     left: 0
//     z-index: 1
//     // background-size: cover
//   .name
//     position: absolute!important
//     width: 100%
//     height: 100%
//     top: 0
//     left: 0
//     z-index: 1
//   .n1
//     // left: 25px
//     // width: 130px
//     // height: 19px
//     background-image: url(~@/assets/name01.png)
//   .n2
//     // right: 25px
//     // width: 179px
//     // height: 19px
//     background-image: url(~@/assets/name02.png)
//   @for $i from 1 through 6
//     .bg#{$i}
//       background-image: url(~@/assets/top-0#{$i}.png)
//   .banner

//     @for $i from 1 through 4
//       .s#{$i}
//         background-image: url(~@/assets/top-04-#{$i}.png)
//         background-size: cover
</style>
