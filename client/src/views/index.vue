<template>
  <div class="index">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-leimupinleifenleileibie"></span>
      <h4 class="text">Hua.com花礼网</h4>
      <span class="iconfont icon-kefu1"></span>
    </div>
    <!-- 轮播 -->
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
    <!-- 广告 -->
    <div class="notice">
      <div class="notice_item" v-for="(item, index) in notice" :key="index">
        <span class="iconfont icon-wancheng"></span>
        <span v-html="item"></span>
      </div>
    </div>
    <!-- 图片导航 -->
    <div class="imgnav">
      <div class="imgnav_item" v-for="(item, index) in imgnav" :key="index">
        <img :src="item.img" alt="" />
        <span v-html="item.text"></span>
      </div>
    </div>
    <!-- 一秒选花 -->
    <div class="text">
      <i class="wire"></i>
      <span> 一秒选花</span>
      <!-- 送恋人 -->
      <div class="get1">
        <ul>
          <li class="wife" v-for="(item, index) in love" :key="index">
            <img :src="item.img" alt="" />
            <span v-text="item.text"></span>
          </li>
        </ul>
      </div>
      <!-- 生日祝福 -->
      <div class="get2">
        <ul>
          <li class="birthday" v-for="(item, index) in birthday" :key="index">
            <span v-text="item.text"></span>
            <img :src="item.img" alt="" />
          </li>
        </ul>
      </div>
      <!-- 热销 -->
      <div class="get3">
        <li class="hot" v-for="(item, index) in hot" :key="index">
          <div>
            <p v-text="item.text1"></p>
            <p v-text="item.text2"></p>
          </div>
          <img :src="item.img" alt="" />
        </li>
      </div>
      <!-- 大家都在买 -->
      <div class="dj">
        <span class="org">大家都在买</span>
        <span>热销11.7万件</span>
        <span class="org">限时直降</span>
        <span>￥158</span>
      </div>
      <!-- 新品来袭 -->
      <div class="newshop">
        <li v-for="(item, index) in newshop" :key="index">
          <img :src="item.img" alt="" />
          <span>{{ item.text }}</span>
        </li>
      </div>
      <!-- 主页展示图片  爱情鲜花 与送长辈的组件-->
      <showbox></showbox>
      <!-- 主页展示图片  永生花 蛋糕 -->
      <showbox1></showbox1>
      <!-- 企业团购 -->
      <a href="##" class="company"><img :src="company" alt=""/></a>
      <!-- 为什么选择我们 -->
      <div class="select">
        <h2>为什么选择我们</h2>
        <ul>
          <li v-for="(item, index) in select" :key="index">
            <img :src="item.img" alt="" />
            <p>{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="page">
        <ul>
          <a href="##"> <li>企业团购</li></a>
          <a href="##"> <li>设计师款</li></a>
          <a href="##"> <li>同城鲜花</li></a>
          <a href="##"> <li>花语大全</li></a>
          <a href="##"> <li>花礼优势</li></a>
          <a href="##"> <li>勇敢爱</li></a>
          <a href="##"> <li>常见问题</li></a>
          <a href="##"> <li>关于我们</li></a>
        </ul>
        <div class="page_item">
          <div>
            <i class="iconfont icon-iconzhuanqu53"></i>
            <span>客户端</span>
          </div>
          <div>
            <i class="iconfont icon-kefu"></i>
            <span>客服</span>
          </div>
        </div>
        <p>
          Copyright © 2005~2020 花礼网（中国鲜花礼品网）版权所有<br />
          中国鲜花网领先品牌，鲜花速递专家！<br />
          深圳市百易信息技术有限公司 粤ICP备09171662号
        </p>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrolltop v-show="onscrolltop" @click.native="backtop"></scrolltop>
  </div>
</template>

<script>
import showbox from "../components/index/showbox.vue";
import showbox1 from "../components/index/showbox1.vue";
import scrolltop from "../components/scrolltop.vue";

export default {
  data() {
    // 轮播
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
      //广告
      notice: [
        "认证龙头企业",
        "15年品牌",
        "3小时送花",
        "最近<a>36666</a>条好评",
      ],
      //图片导航
      imgnav: [
        { img: "/images/index/procate1.png", text: "鲜花" },
        { img: "/images/index/procate2.png", text: "永生花" },
        { img: "/images/index/procate3.png", text: "蛋糕" },
        { img: "/images/index/procate4.png", text: "礼品" },
        { img: "/images/index/procate5.png", text: "巧克力" },
      ],
      //送恋人
      love: [
        { img: "/images/index/love1.png", text: "送恋人" },
        { img: "/images/index/love2.png", text: "送长辈" },
        { img: "/images/index/love3.png", text: "送朋友" },
      ],
      //生日祝福
      birthday: [
        { img: "/images/index/birthday1.png", text: "生日祝福" },
        { img: "/images/index/birthday2.png", text: "表白求婚" },
        { img: "/images/index/birthday3.png", text: "开业商务" },
        { img: "/images/index/birthday4.png", text: "周年纪念" },
      ],
      //热销榜
      hot: [
        { img: "/images/index/hot1.png", text1: "热销榜", text2: "集万千宠爱" },
        { img: "/images/index/hot2.png", text1: "特价专区", text2: "超值好货" },
      ],
      //新品来袭
      newshop: [
        { img: "/images/index/new1.png", text: "新品来袭" },
        { img: "/images/index/new2.png", text: "品味之选" },
        { img: "/images/index/new3.png", text: "设计师甄选" },
      ],
      //企业团购
      company: "images/index/company.png",
      //为什么选择我们
      select: [
        { img: "/images/index/select1.png", text: "获评鲜花龙头企业" },
        { img: "/images/index/select2.png", text: "1~3小时送花上门" },
        { img: "/images/index/select3.png", text: "赛事冠军花艺师团队" },
        { img: "/images/index/select4.png", text: "严选花材" },
        { img: "/images/index/select5.png", text: "12道严苛品控标准" },
        { img: "/images/index/select6.png", text: "500万用户信赖好评" },
      ],
      // 返回顶部
      onscrolltop: false,
      scrolltop: 0,
    };
  },
  components: {
    showbox: showbox,
    showbox1: showbox1,
    scrolltop: scrolltop,
  },
  methods: {
    // 回到顶部的显示隐藏
    Scrolltop() {
      this.scrolltop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (this.scrolltop > 600) {
        this.onscrolltop = true;
      } else {
        this.onscrolltop = false;
      }
    },
    // 回到顶部
    backtop() {
      let timer = setInterval(() => {
        let speed = Math.floor(-this.scrolltop / 5);
        document.documentElement.scrollTop = this.scrolltop + speed;
        if (this.scrolltop == 0) {
          clearInterval(timer);
        }
      }, 16);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.Scrolltop);

  },
};
</script>
<style scoped>
/* 头部 */
.header {
  width: "100%";
  height: 50px;
  padding: 0 5px;
  background: #435448;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.header span {
  font-size: 20px;
}
.header h4 {
  color: pink;
  font-style: oblique;
  text-align: center;
  background: #435448;
}

/* 轮播 */
#banner {
  width: 100%;
  height: 200px;
}
#banner .swiper-container {
  --swiper-theme-color: #ff734c;
}
#banner .swiper-container .swiper-slide {
  width: 100%;
  height: 200px;
}
#banner .swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
}
/* 广告 */
.notice {
  width: 100%;
  /* height: 40px; */
  margin: 5px 0;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  background: #fff;
}
.notice .notice_item {
  font-size: 12px;
}
.notice .notice_item span {
  font-size: 12px;
}
.notice .notice_item span a {
  color: red;
}
/* 图片导航 */
.imgnav {
  width: 100%;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding: 0 5px;
  box-sizing: border-box;
  background: #fff;
}
.imgnav .imgnav_item {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.imgnav .imgnav_item img {
  /* font-size: 12px; */
  width: 36px;
  height: 36px;
}

/* 一秒选花 */
.text {
  width: 100%;
  background: #fff;
  /* background: #e9ecf0; */
}
.text .wire {
  width: 5px;
  display: inline-block;
  height: 10px;
  background: black;
  margin-left: 5px;
}
.text span {
  font-size: 16px;
}
.text > div {
  border-bottom: 2px solid #e9ecf0;
  box-sizing: border-box;
}
/* 送恋人 */
.text .get1 {
  width: 100%;
  list-style: none;
}
.text .get1 ul {
  display: flex;
  justify-content: space-between;
}
.text .get1 .wife {
  display: flex;
  position: relative;
  flex-direction: column;
}
.text .get1 .wife img {
  width: 117px;
  height: 130px;
}
.text .get1 .wife span {
  position: absolute;
  color: #fff;
  left: 40px;
  top: 105px;
}
/* 生日祝福 */
.text .get2 {
  width: 100%;
  border: none;
}
.text .get2 ul {
  display: flex;
  justify-content: space-between;
}
.text .get2 ul .birthday {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}
.text .get2 ul .birthday img {
  width: 87px;
  height: 95px;
}
.text .get2 ul .birthday span {
  font-size: 14px;
  text-align: center;
  position: absolute;
  width: 87px;
  top: 10px;
}
/* 热销 */
.text .get3 {
  width: 100%;
  display: flex;
  list-style: none;
  justify-content: space-around;
  border: none;
}
.text .get3 li {
  display: flex;
  border: 1px solid #e9ecf0;
  padding: 5px;
}
.text .get3 li div {
  display: flex;
  font-size: 14px;
  flex-direction: column;
}
.text .get3 li div p {
  text-align: center;
  font-size: 12px;
}
.text .get3 li img {
  width: 120px;
}
/* 大家都在卖 */
.text .dj {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  border: none;
}
.text .dj span {
  font-size: 12px;
}
.text .dj .org {
  border: 1px solid#ccc;
  background: orange;
  border-radius: 35%;
  color: #fff;
}
/* 新品来袭 */
.text .newshop {
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  margin-top: 15px;
}
.text .newshop li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
}
.text .newshop li img {
  width: 117px;
  height: 130px;
}
.text .newshop li span {
  position: absolute;
  top: 110px;
  width: 117px;
  background: rgba(35, 38, 40, 0.8);
  color: #fff;
  text-align: center;
}
/* 企业团购 */
.text .company img {
  width: 100%;
}
/* 为什么选择我们 */
.text .select {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
}
.text .select h2 {
  font-size: 16px;
  text-align: center;
  color: #232628;
}
.text .select ul {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-flow: row wrap;
}
.text .select ul li {
  list-style: none;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}
.text .select ul li img {
  width: 64px;
  height: 64px;
}
.text .select ul li p {
  font-size: 12px;
}
/* 页尾 */
.text .page {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0 50px;
}
.text .page ul {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.text .page ul a {
  text-decoration: none;
  display: block;
  width: 20%;
  margin: 5px 5px 10px 0;
}
.text .page ul a li {
  width: 100%;
  list-style: none;
  color: black;
  font-size: 14px;
  text-align: center;
  background: #e9ecf0;
  text-align: center;
}
.text .page .page_item {
  width: 100%;
  display: flex;
  margin: 10px 0;
}
.text .page .page_item div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text .page .page_item div i {
  font-size: 25px;
}
.text .page p {
  font-size: 12px;
  color: #b4babf;
  text-align: center;
}
</style>
