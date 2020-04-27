<template>
  <div class="page">
    <!-- 头部 -->
    <div class="header">
      <span class="iconfont icon-right" @click="skip"></span>
      <span class="hua">Hua.com花礼网</span>
      <span class="iconfont icon-santiaogang"></span>
    </div>

    <!-- 轮播 -->
    <div id="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="swiper-slide"
          v-for="(item, index) in detail.bannerimg"
          :key="index"
        >
          <a href="#">
            <img :src="item" alt />
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 介绍 -->
    <div class="introduce">
      <div class="introduce_top">
        <div>
          <span>{{ detail.name }}--{{ detail.Science }}</span>
          <span class="jd">{{ detail.promo }}</span>
        </div>
        <span class="iconfont icon-shoucang"></span>
      </div>
      <div class="introduce_buttom">
        <div>
          <p>{{ detail.newPrice }}</p>
          <span>{{ detail.oldPrice }}</span>
        </div>
        <span>已售出{{ detail.num }}件</span>
      </div>
    </div>
    <!-- app下单 -->
    <div class="app">
      <span class="iconfont icon-iconzhuanqu53 phone"></span>
      <div>
        <span>App下单立减五元</span>
        <span class="iconfont icon-xiangyou"></span>
      </div>
    </div>
    <!-- 花语 配送 材料 -->
    <div class="language">
      <div>
        <span class="left">花语</span>
        <span class="right">{{ detail.flowerLanguage }}</span>
      </div>
      <div>
        <span class="left">材料</span>
        <span class="right">{{ detail.ScienceAll }}</span>
      </div>
      <div>
        <span class="left">配送</span>
        <div class="right">
          <span>
            限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽
          </span>
          <span class="iconfont icon-you"></span>
        </div>
      </div>
    </div>
    <!-- 已选择 -->
    <div class="select">
      <div class="top">
        <span class="left">已选</span>
        <div class="right">
          <span class="">{{ detail.name }}</span>
          <span class="iconfont icon-you"></span>
        </div>
      </div>
      <div class="top">
        <span class="left">配送至</span>
        <div class="right">
          <span class="iconfont icon-shouhuodizhi">请选择配送地区</span>
          <span class="iconfont icon-gengduo"></span>
        </div>
      </div>
    </div>
    <!-- 订单评价 -->
    <div class="evaluate">
      <div class="evaluate_top">
        <span>订单评价</span>
        <span>最近已有8413条评论<i class="iconfont icon-xiangyou"></i></span>
      </div>
      <div
        class="evaluate_center"
        v-for="(item, index) in evaluate"
        :key="index"
      >
        <div>
          <img :src="item.head" alt="" />
          <b>{{ item.name }}</b>
          <img
            src="/images/index/details/xingxing.png"
            alt=""
            class="xingxing"
          />
        </div>
        <p>{{ item.text }}</p>
        <a href=""><img :src="item.img" alt=""/></a>
        <span class="iconfont icon-dingwei1">{{ item.slit }}</span>
      </div>
      <a href="##" class="many">查看更多</a>
    </div>
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
    <!-- 图文详情 -->
    <div class="picture">
      <h4>图文详情</h4>
      <ul>
        <li>
          <a href="###" v-for="(val, index) in detail.detailimg" :key="index">
            <img :src="val.img" alt="" />
          </a>
        </li>
      </ul>
      <div v-for="(item, index) in page" :key="index" class="text">
        <a
          href="###"
          v-for="(val, index) in item.text"
          :key="index"
          class="text_a"
        >
          <p>{{ val.text }}</p>
          <span class="title">{{ val.title }}</span>
          <a href="##"><img :src="val.img" alt=""/></a>
        </a>
      </div>
    </div>
    <!-- 底部加入购物车 -->
    <div class="add">
      <div>
        <a href="##">
          <span class="iconfont icon-kefu1"></span>
          <span>客服</span>
        </a>
        <a href="##">
          <span class="iconfont icon-gouwuche"></span>
          <span>购物车</span>
          <span class="num" v-show="$store.state.numall > 0">{{
            $store.state.numall
          }}</span>
        </a>
      </div>
      <div>
        <a href="##" class="shopcar">加入购物车</a>
        <a href="##" class="shoping">立即购买 </a>
      </div>
    </div>
    <!-- 返回顶部 -->
    <scrolltop v-show="onscrolltop" @click.native="backtop"></scrolltop>
  </div>
</template>
<script>
import scrolltop from "../components/scrolltop.vue";
import axios from "axios";
export default {
  data() {
    return {
      detail: [],
      // detail: [
      //   {
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
      pageint: [
        {
          text: "一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
          text1: "经典爆款，年销售冠军！",
          newprice: "¥249",
          oldprice: "¥315",
          off: "已售12.04万件",
        },
      ],
      evaluate: [
        {
          head: "/images/index/details/evaluate1.jpg",
          name: "李*",
          text: "送货及时，品质也不错",
          img: "/images/index/details/evaluate2.jpeg",
          slit: "广东广州市越秀区",
        },
        {
          head: "/images/index/details/evaluate3.jpg",
          name: "杨*",
          text: "鲜花一如既往的新鲜，老婆很喜欢！",
          img: "/images/index/details/evaluate4.jpeg",
          slit: "上海静安区",
        },
        {
          head: "/images/index/details/evaluate5.jpg",
          name: "周*发",
          text: "感觉挺好看的",
          img: "/images/index/details/evaluate6.jpg",
          slit: "上海长宁区",
        },
      ],
      //为什么选择我们
      select: [
        { img: "/images/index/select1.png", text: "获评鲜花龙头企业" },
        { img: "/images/index/select2.png", text: "1~3小时送花上门" },
        { img: "/images/index/select3.png", text: "赛事冠军花艺师团队" },
        { img: "/images/index/select4.png", text: "严选花材" },
        { img: "/images/index/select5.png", text: "12道严苛品控标准" },
        { img: "/images/index/select6.png", text: "500万用户信赖好评" },
      ],
      //图文详情
      page: [
        {
          id: 1,
          text: [
            {
              img: "/images/index/details/yiwang13.png",
              text: "龙头企业认证·15年品牌",
              title: "始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。",
            },
            {
              img: "/images/index/details/yiwang14.png",
              text: "12道品控标准 + 送前实拍",
              title:
                "行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。",
            },
            {
              img: "/images/index/details/yiwang15.png",
              text: "花艺设计团队",
              title:
                "国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。",
            },
            {
              img: "/images/index/details/yiwang16.png",
              text: "当日新鲜花材制作，极速送达",
              title:
                "<p>门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！</p>",
            },
            {
              img: "/images/index/details/yiwang17.png",
              text: "客服团队",
              title:
                "建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。",
            },
            {
              img: "/images/index/details/yiwang18.png",
              text: "不只鲜花 · 跨界音乐微电影",
              title:
                "联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。",
            },
            {
              img: "/images/index/details/yiwang19.png",
              text: "龙头企业认证·15年品牌",
              title: "始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。",
            },
          ],
        },
      ],
      // 返回顶部
      onscrolltop: false,
      scrolltop: 0,

      // 顶部分类
      list: true,
    };
  },
  methods: {
    skip() {
      this.$router.push("/index");
    },
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
          // this.onscrolltop = false;
          clearInterval(timer);
        }
      }, 10);
    },
    // 调取数据
    getdata() {
      let id = this.$route.query.id;
      axios({
        method: "get",
        url: "http://localhost:8080/text.json",
      })
        .then((res) => {
          let data = res.data.Lover.filter((item) => {
            return item.id == id;
          });
          this.detail = data[0];
          console.log(this.detail);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  components: {
    scrolltop: scrolltop,
  },
  created() {
    console.log(this.$route.query.id);
    this.getdata();
  },
  mounted() {
    window.addEventListener("scroll", this.Scrolltop);
  },
};
</script>
<style lang="scss" scoped>
.page {
  height: 2000px;
  a {
    text-decoration: none;
    color: #242628;
  }
  li {
    list-style: none;
  }
  padding: 0 0 40px 0;
  background-color: #fff;
}
// 头部
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  .iconfont {
    font-size: 20px;
  }
  .hua {
    color: pink;
    font-style: oblique;
    text-align: center;
  } 
}
/* 轮播 */
#banner {
  width: 100%;
  height: 410px;
}
#banner .swiper-container {
  --swiper-theme-color: #ff734c;
}
#banner .swiper-container .swiper-slide {
  width: 100%;
  height: 410px;
}
#banner .swiper-container .swiper-slide img {
  width: 100%;
  height: 100%;
}
// 介绍
.introduce {
  width: 100%;
  font-size: 14px;
  padding: 10px 10px 0 10px;
  box-sizing: border-box;
  background: #fff;
  .introduce_top {
    display: flex;
    justify-content: space-between;
    div {
      width: 75%;
      // span {
      //   width: 50%;
      //   overflow: hidden;
      //   text-overflow: ellipsis;
      //   white-space: nowrap;
      // }
      .jd {
        color: #ff734c;
        margin-left: 10px;
      }
    }
  }
  .introduce_buttom {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    div {
      width: 60%;
      display: flex;
      p {
        color: #ff734c;
        font-weight: 600;
        font-size: 20px;
        text-align: center;
      }
      span {
        text-decoration: line-through;
        color: #b4babf;
        text-align: center;
        line-height: 26px;
      }
    }
  }
}
// app
.app {
  background-color: #fff;
  width: 100%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 0 10px;
  box-sizing: border-box;
  div {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      padding: 0 10px 0 0;
    }
  }
  .phone {
    width: 20%;
    text-align: left;
    font-size: 22px;
  }
}
// 花语 配送 材料
.language {
  margin: 5px 0;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 0 10px;
  box-sizing: border-box;
  div {
    width: 100%;
    display: flex;
    margin: 15px 0;
    align-items: center;
    .left {
      text-align: left;
      width: 20%;
    }
    .right {
      width: 80%;
      display: flex;
      justify-content: space-between;
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50%;
        text-align: right;
      }
    }
  }
}
// 已选择
.select {
  background-color: #fff;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
  .top {
    display: flex;
    margin: 15px 0;
    .left {
      text-align: left;
      width: 20%;
    }
    .right {
      width: 80%;
      display: flex;
      justify-content: space-between;
    }
  }
}
// 评价
.evaluate {
  width: 100%;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  margin: 5px 0;
  padding: 0 10px;
  box-sizing: border-box;
  .evaluate_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    padding: 10px 0;
    span {
      color: #71797f;
    }
  }
  .evaluate_center {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #ccc;
    padding: 10px 0;
    box-sizing: border-box;

    div {
      display: flex;
      position: relative;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .xingxing {
        width: 60px;
        height: 9px;
        position: absolute;
        right: 0;
      }
    }
    p {
      margin: 10px 0;
      font-size: 14px;
    }
    a {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    span {
      font-size: 12px;
      color: #b4babf;
      margin-top: 5px;
    }
  }
  .many {
    width: 96px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: black;
    border: 1px solid #ccc;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
/* 为什么选择我们 */
.select {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;

  h2 {
    font-size: 16px;
    text-align: center;
    color: #232628;
    margin: 15px 0;
  }
  ul {
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-flow: row wrap;

    li {
      list-style: none;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 0;

      img {
        width: 64px;
        height: 64px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
// 图片详情
.picture {
  width: 100%;
  background-color: #fff;
  margin: 10px 0;
  h4 {
    font-size: 14px;
    margin: 10px 10px;
  }
  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    color: #242628;
    font-size: 12px;
    padding: 10px;
    box-sizing: border-box;
    .text_a {
      margin: 10px 0;
      p {
        font-size: 20px;
        color: black;
        width: 100%;
        text-align: center;
      }
      .title {
        display: block;
        width: 100%;
        margin: 10px 0;
      }
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
// 底部添加购买
.add {
  width: 100%;
  height: 50px;
  display: flex;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 16px;
  div {
    display: flex;
    width: 50%;
    justify-content: space-around;
    height: 100%;
    a {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      text-align: center;
      position: relative;
      span {
        height: 50%;
        line-height: 25px;
      }
      .num {
        position: absolute;
        width: 15px;
        height: 15px;
        background: #ff734c;
        border-radius: 50%;
        right: 30px;
        color: #ccc;
        text-align: center;
        line-height: 15px;
      }
    }
    .shoping {
      background-color: #ff734c;
      line-height: 50px;
      color: #fff;
    }
    .shopcar {
      background-color: #3d4d42;
      line-height: 50px;
      color: #fff;
      position: relative;
    }
  }
}
</style>
