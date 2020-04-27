<template>
  <div>
    <!-- 没有数据的情况 -->
    <div class="vacancy" v-if="!shopnum.length">
      <!-- 头部 -->
      <div class="header">
        <span class="iconfont icon-____-" @click="skip"></span>
        <p>购物车</p>
      </div>
      <!-- 登录 -->
      <div class="login">
        <span>登录后将同步你的购物车商品</span>
        <a>登录</a>
      </div>
      <!-- 中间空购物车 -->
      <div class="shopcontent">
        <div>
          <img src="images/shop/kongshopcar.png" alt="" />
          <span>购物车内暂时没有商品</span>
          <a href="/index">去逛逛</a>
        </div>
      </div>
      <!-- 展示图片 -->
      <div class="show">
        <span>猜你喜欢</span>
        <ul>
          <li v-for="(item, index) in show" :key="index">
            <img :src="item.img" alt="" />
            <div>
              <span>{{ item.name }}</span>
              <span>{{ item.text }}</span>
            </div>
            <span class="red">{{ item.price }}</span>
          </li>
        </ul>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        <div>已经到底咯...</div>
      </div>
    </div>
    <!-- 有数据的情况 -->
    <div class="shopcar" v-if="shopnum.length">
      <!-- 头部 -->
      <div class="header">
        <span class="iconfont icon-right" @click="skip"></span>
        <span>购物车</span>
        <span class="iconfont icon-santiaogang
"></span>
      </div>
      <!-- 主题内容 -->
      <div class="content">
        <div v-for="(item, index) in shopnum" :key="index" class="content_box">
          <input type="checkbox" v-model="item.mes" @change="dx" />
          <a href="##" class="image">
            <img :src="item.img" alt="" />
          </a>
          <div class="right">
            <a href="##">
              <p class="text">{{ item.text }}</p>
              <p class="name">{{ item.name }}</p>
            </a>
            <div class="num">
              <span>数量</span>
              <span class="iconfont icon-icon_cut" @click="sub(index)"></span>
              <span>{{ item.num }}</span>
              <span class="iconfont icon-icon_add" @click="add(index)"></span>
            </div>
            <div class="red">￥{{ item.price }}</div>
          </div>
          <span class="delete" @click="delete1(index)">删除</span>
        </div>
      </div>
      <!-- 广告 -->
      <div class="adv">
        <div class="adv_top">
          <p>购买该商品的还购买了</p>
          <span>巧克力/花瓶</span>
        </div>
        <div class="adv_bottom">
          <ul>
            <li v-for="(item, index) in car" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.text }}</p>
              <span>{{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 底部结算 -->
      <div class="account ">
        <input type="checkbox" name="" id="" v-model="qb" @change="qx" />
        <div class="account_left">
          合计:
          <span class="red">￥{{ sumprice }}</span>
        </div>
        <div class="account_right">
          去结算
          <span>({{ sumnum }})</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: [
        {
          img: "images/index/show1.jpg",
          name: "一往情深",
          text: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
          price: "¥249",
        },
        {
          img: "images/index/show2.jpg",
          name: "一心一意",
          text: "玫瑰11枝，粉色勿忘我0.3扎",
          price: "¥139",
        },
        {
          img: "images/index/show5.jpg",
          name: "不变的承诺",
          text: "99枝红玫瑰",
          price: "¥520",
        },
        {
          img: "images/index/show3.jpg",
          name: "忘情巴黎",
          text: "33枝红玫瑰",
          price: "¥298",
        },
        {
          img: "images/index/show7.jpg",
          name: "韩式系列/初心不负",
          text:
            " 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
          price: "¥229",
        },
        {
          img: "images/index/show11.jpg",
          name: " 语笑嫣然",
          text: "粉佳人玫瑰9枝、粉色小菊、洋桔梗、大叶尤加利",
          price: "¥198",
        },
      ],
      shopnum: [],
      msg: true,
      qb: true,
      car: [
        {
          img: "images/shop/car1.jpg",
          text: "一鹿(路)有你永生花小夜灯",
          price: "￥298",
        },
        { img: "images/shop/car2.jpg", text: "一生一世", price: "￥198" },
        {
          img: "images/shop/car3.jpg",
          text: "守护初心口红款礼盒/少女粉",
          price: "￥999",
        },
        { img: "images/shop/car4.jpg", text: "花好月圆永生花台灯", price: "￥298" },
        {
          img: "images/shop/car5.jpg",
          text: "永生花带灯+蓝牙音箱/浪漫粉",
          price: "￥398",
        },
        { img: "images/shop/car6.jpg", text: "天使之恋", price: "￥159" },
        { img: "images/shop/car7.jpg", text: "星期耳钉礼盒", price: "￥198" },
        {
          img: "images/shop/car8.jpg",
          text: "巧克巧蔻定制16粒装手工夹心巧克力",
          price: "￥288",
        },
      ],
    };
  },
  methods: {
    // 跳转
    skip() {
      // window.location.href = "/category";
      this.$router.back();
    },
    // 增加数量
    add(index) {
      var shopall = JSON.parse(window.localStorage.getItem("shopall"));
      this.shopnum[index].num++;
      window.localStorage.setItem("shopall", JSON.stringify(this.shopnum));
      this.$store.commit("num");
    },
    // 减少数量
    sub(index) {
      var shopall = JSON.parse(window.localStorage.getItem("shopall"));
      if (this.shopnum[index].num == 1) {
        shopall.splice(index, 1);
        this.shopnum.splice(index, 1);
      } else {
        shopall[index].num--;
        this.shopnum[index].num = this.shopnum[index].num - 1;
      }
      // this.$store.commit("sub");
      window.localStorage.setItem("shopall", JSON.stringify(shopall));
      this.$store.commit("num");
    },
    // 全选
    qx() {
      console.log(this.shopnum);
      for (let i = 0; i < this.shopnum.length; i++) {
        this.shopnum[i].mes = this.qb;
        // 判断全选控制总数量
        // if (!this.qb)
        // {this.$store.state.numall = 0}
        // else {this.$store.state.numall += this.shopnum[i].num}
      }
    },
    // 单选
    dx() {
      // 过滤器
      let newcar = this.shopnum.filter((item) => {
        return item.mes == true;
      });
      if (newcar.length == this.shopnum.length) this.qb = true;
      else this.qb = false;
    },
    // 删除
    delete1(index) {
      this.shopnum.splice(index, 1);
      var shopall = JSON.parse(window.localStorage.getItem("shopall"));
      console.log(shopall);
      shopall.splice(index, 1);
      window.localStorage.setItem("shopall", JSON.stringify(shopall));
      this.$store.commit("sub");
      this.$store.commit("num");
    },
  },
  computed: {
    //总价
    sumprice() {
      var sumprice = 0;
      for (let i = 0; i < this.shopnum.length; i++) {
        if (this.shopnum[i].mes) {
          sumprice += this.shopnum[i].price * this.shopnum[i].num;
        }
      }
      return sumprice;
    },
    // 总数量
    sumnum() {
      var carnum = 0;
      for (let j = 0; j < this.shopnum.length; j++) {
        if (this.shopnum[j].mes) {
          carnum += this.shopnum[j].num;
        }
      }
      return carnum;
    },
  },
  created() {
    // 从缓存中获取数据
    let shopall = JSON.parse(window.localStorage.getItem("shopall"));
    console.log(shopall);
    // this.shopnum.push(shopall)
    this.shopnum = shopall;
  },
  mounted() {
    window.addEventListener("scroll", this.Scrolltop);
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
li {
  list-style: none;
}
// 无数据的情况
.vacancy {
  width: 100%;
  height: 100%;
  // 头部
  .header {
    width: 100%;
    background-color: #fff;
    display: flex;
    font-size: 16px;
    padding: 10px 0;
    span {
      width: 25%;
      margin-left: 1rem;
    }
    p {
      width: 50%;
      text-align: center;
    }
  }
  // 登录
  .login {
    width: 100%;
    background-color: #fff0ec;
    border: 0.07142857rem solid rgba(255, 115, 76, 0.2);
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 5px 0;
    align-items: center;
    box-sizing: border-box;
    span {
      margin-right: 15px;
    }
    a {
      color: #ff734c;
      border: 0.07142857rem solid #ff734c;
      width: 66px;
      height: 26px;
      border-radius: 30%;
      text-align: center;
      line-height: 26px;
    }
  }
  // 空白购物车
  .shopcontent {
    width: 100%;
    font-size: 14px;
    background-color: #fff;
    padding: 60px 0;
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      margin: auto auto;
      align-items: center;
      img {
        width: 127px;
        height: 98px;
      }
      span {
        margin: 10px 0;
      }
      a {
        color: #ff734c;
        border: 0.07142857rem solid #ff734c;
        width: 66px;
        height: 26px;
        border-radius: 30%;
        text-align: center;
        line-height: 26px;
      }
    }
  }
  // 展示图片
  .show {
    width: 100%;
    background-color: #fff;
    margin-top: 10px;
    box-sizing: border-box;
    font-size: 14px;
    ul {
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      box-sizing: border-box;
      justify-content: space-around;

      li {
        width: 48%;
        box-sizing: border-box;
        box-shadow: 0rem 0.28571429rem 0.42857143rem 0rem #dee2e5;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        padding: 0 5px;

        img {
          width: 176px;
          height: 192px;
        }
        div {
          width: 100%;
          display: flex;
          flex-direction: row;
          margin: 10px 0;
          span {
            width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .red {
          color: #ff734c;
        }
      }
    }
  }
  // 底部
  .bottom {
    width: 100%;
    background-color: #fff;
    margin: 10px 0 50px 0;
    font-size: 14px;
    div {
      width: 40%;
      height: 40px;
      margin: 0 auto;
      text-align: center;
      line-height: 40px;
    }
  }
}
// 有数据的情况
.shopcar {
  width: 100%;
  // 头部
  .header {
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  // 购物车
  .content {
    width: 100%;
    background-color: #fff;

    .content_box {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      .delete {
        width: 15%;
        font-size: 18px;
        border: 1px solid #ccc;
        border-radius: 10%;
        text-align: center;
      }

      input {
        width: 10%;
      }
      .image {
        width: 123px;
        height: 113px;
        img {
          width: 107px;
          height: 113px;
        }
      }
      .right {
        width: 37%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #232628;
        a {
          width: 100%;
          display: flex;
          color: #232628;
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .name {
            width: 60%;
          }
        }
        .num {
          display: flex;
          margin: 5px 0;
          span {
            margin-right: 10px;
          }
        }
        .red {
          font-size: 16px;
          color: #ff734c;
        }
      }
    }
  }
  // 广告
  .adv {
    width: 100%;
    margin: 10px 0 130px 0;
    padding: 10px;
    background-color: #fff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    .adv_top {
      display: flex;
      p {
        width: 45%;
        color: #ff6a00;
      }
      span {
        width: 55%;
        border-left: 1px solid #ccc;
        padding: 0 0 0 25px;
      }
    }
    .adv_bottom {
      margin: 15px 0;
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        overflow: auto;
        li {
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 5px 0;
          img {
            width: 78px;
            height: 85px;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
  // 底部
  .account {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 50px;
    .account_left {
      width: 70%;
      padding-left: 5px;
      font-size: 16px;
      padding: 10px 0;
      line-height: 30px;
      .red {
        color: #ff734c;
      }
    }
    .account_right {
      padding: 10px 0;

      width: 30%;
      height: 100%;
      text-align: center;
      color: #fff;
      background-color: #ff734c;
    }
  }
}
</style>
