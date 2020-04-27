<template>
  <div id="user">
    <!-- head -->
    <div id="header">
      <div class="headerbox">
        <p>
          <i class="iconfont icon-xiangzuo"></i>
        </p>
        <p>个人中心</p>
        <p>
          <!-- <i class="iconfont icon-wodexiaoxiicon"></i> -->
        </p>
      </div>
    </div>
    <div id="main">
      <!-- 登录状态 -->
      <div class="userinformation">
        <!--未登录 -->
        <div class="userinformation-notlogin" v-show="username == ''">
          <p>Hi,欢迎来到花礼网</p>
          <p>
            <!-- <a href="/my/login">登录/注册</a> -->
            <router-link to="/my/login">登录/注册</router-link>
          </p>
        </div>
        <!--登录 -->
        <div class="userinformation-notlogin" v-show="username != ''">
          <img src="images/my/user.jpg" alt="" />
          <p>{{ username }}</p>
          <p>
            <a href="##" @click="quit">退出登录</a>
          </p>
        </div>
      </div>
      <div class="planA shadow">
        <div class="planA-head">
          <p>我的订单</p>
          <p>
            <a href>
              全部订单
              <i class="iconfont icon-jf-row"></i>
            </a>
          </p>
        </div>
        <div class="planA-cont">
          <div class="contItem">
            <a href>
              <img src="images/my/myinfo1.png" alt />
              <p>待付款</p>
            </a>
          </div>
          <div class="contItem">
            <a href>
              <img src="images/my/myinfo2.png" alt />
              <p>今日配送</p>
            </a>
          </div>
          <div class="contItem">
            <a href>
              <img src="images/my/myinfo3.png" alt />
              <p>待评价</p>
            </a>
          </div>
        </div>
      </div>
      <div class="planB shadow">
        <div class="linkbox">
          <div
            class="linkItem"
            v-for="(item, index) in linkList.linkListOne"
            :key="index"
          >
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{ item.name }}</p>
            </a>
          </div>
        </div>
        <div class="linkbox">
          <div
            class="linkItem"
            v-for="(item, index) in linkList.linkListTwo"
            :key="index"
          >
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{ item.name }}</p>
            </a>
          </div>
        </div>
      </div>
      <div class="planC shadow">
        <div class="linkbox">
          <div
            class="linkItem"
            v-for="(item, index) in linkList.linkListThree"
            :key="index"
          >
            <a :href="item.src">
              <i class="iconfont" :class="item.icon"></i>
              <p>{{ item.name }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my",
  data() {
    return {
      linkList: {
        linkListOne: [
          { src: "", icon: "icon-llcouponlistnopic", name: "优惠券" },
          { src: "", icon: "icon-quanyiqia", name: "权益卡" },
          { src: "", icon: "icon-yue", name: "余额" },
          { src: "", icon: "icon-uEA-ste-service-", name: "会员积分" },
        ],
        linkListTwo: [
          { src: "", icon: "icon-shouhuodizhi", name: "收货地址" },
          { src: "", icon: "icon-shengrijiniantixing", name: "生日纪念提醒" },
          { src: "", icon: "icon-shoucang", name: "我的收藏" },
          { src: "", icon: "icon-liulanjilu", name: "浏览记录" },
        ],
        linkListThree: [
          { src: "", icon: "icon-kefu", name: "联系客服" },
          { src: "", icon: "icon-bangzhu", name: "帮助中心" },
          { src: "", icon: "icon-guanyu", name: "关于我们" },
          { src: "", icon: "icon-shezhi", name: "设置" },
        ],
      },
      username: "",
    };
  },
  created() {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user == null) {
      this.username = [];
    } else {
      this.username = user.tel;
    }
  },
  methods: {
    quit() {
      this.username = "";
      window.localStorage.removeItem('user')
      this.$router.push('/index')
    },
  },
};
</script>

<style lang="less" scoped>
#user {
  max-width: 800px;
  margin: 0 auto;
  font-size: 0.426667rem;
  text-align: center;
}

#header {
  width: 100%;
  height: 1.333333rem;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  z-index: 99;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background: #fff;
  overflow: hidden;
  border-bottom: 2px solid #f1f3f6;

  .headerbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 1.333333rem;

    p {
      &:nth-child(1),
      &:nth-child(3) {
        width: 12%;
        height: 1.333333rem;
        line-height: 1.226667rem;
        text-align: center;

        i {
          font-size: 0.533333rem;
          color: #000;
        }
      }

      &:nth-child(2) {
        width: 76%;
        font-size: 0.48rem;
        line-height: 1.333333rem;
        text-align: center;
      }
    }
  }
}

#main {
  background-image: url(/images/my/background.png);
  background-color: #fff;
  height: 100vh;
  // -moz-box-sizing: border-box;
  // box-sizing: border-box;
  padding: 1.333333rem 0;
  background-repeat: no-repeat;
  -o-background-size: 100% 4.8rem;
  background-size: 100% 4.8rem;
  background-position: top center;

  .userinformation {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 2.986667rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;

    .userinformation-notlogin {
      // margin-left: 50px;
      p {
        &:nth-child(1) {
          color: #fff;
        }

        &:nth-child(2) {
          margin-top: 0.213333rem;
          text-align: center;
        }
      }
      img {
        width: 63px;
        height: 63px;
        position: absolute;
        border-radius: 50%;
        left: 50px;
      }
       a {
            color: red;
            display: block;
            width: 3.36rem;
            height: 0.96rem;
            line-height: 0.96rem;
            font-weight: 500;
          }
    }
  }

  .shadow {
    width: 94%;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 3%;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 5px 10px 0 #dee2e5;
  }

  .planA {
    .planA-head {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      width: 100%;
      height: 1.173333rem;
      border-bottom: 1px solid #e9ecf0;
      line-height: 1.173333rem;

      p {
        &:nth-child(1) {
          font-size: 0.48rem;
          color: #000;
        }

        &:nth-child(2) {
          a {
            font-size: 0.346667rem;
            color: #000;

            i {
              font-size: 0.346667rem;
            }
          }
        }
      }
    }

    .planA-cont {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -moz-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;

      .contItem {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -moz-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        text-align: center;
        padding: 0.346667rem 0.186667rem;
        font-size: 12px;

        a {
          width: 100%;
          height: 100%;
          font-size: 0.373333rem;
          color: #000;
        }

        img {
          width: 0.933333rem;
          height: 0.933333rem;
        }
      }
    }
  }

  .planB,
  .planC {
    margin-top: 0.213333rem;
  }
  .linkbox {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    &:nth-child(2) {
      border-top: 1px solid #f5f6f8;
    }
    .linkItem {
      width: 2.4rem;
      height: 2.4rem;
      a {
        font-size: 0.32rem;
        color: #000;
        display: inline-block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // line-height: 60px;
        padding: 0.4rem 0;
        i {
          display: inline-block;
          height: 0.8rem;
          font-size: 0.48rem;
          line-height: 0.8rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
