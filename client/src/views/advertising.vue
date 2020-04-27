<template>
  <!-- 轮播 -->
  <div>
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in lunboimg"
          :key="index"
        >
          <a href="#">
            <img :src="item" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <span class="skip" @click="skip">X</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunboimg: [
        "/images/index/lunbo01.jpg",
        "/images/index/lunbo02.jpg",
        "/images/index/lunbo03.jpg",
        "/images/index/lunbo04.jpg",
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
  methods: {
    skip() {
console.log(this.$router)
this.$router.push('/index')
    },
  },
};
</script>
<style scoped>
/* 轮播 */
#banner {
  width: 100%;
  height: 100%;
}
#banner .swiper-container {
  --swiper-theme-color: #ff734c;
}
#banner .swiper-container .swiper-slide {
  width: 100%;
  height: 100%;
}
#banner .swiper-container .swiper-slide img {
  width: 100%;
  height: 670px;
}
.skip {
  width: 25px;
  height: 25px;
  background-color: #ccc;
  position: absolute;
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  top: 0;
  right: 0;
  color: #fff;
  cursor: pointer;
  z-index:99999
}
</style>
