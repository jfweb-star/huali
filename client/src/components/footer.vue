<template>
  <div id="app">
    <!-- App导航 -->
    <div class="nav" v-if="$route.meta.showTabbar">
      <!-- 不同页面中控制底部导航的显示隐藏 -->
      <div class="nav-item" v-for="(item, index) in nav" :key="index">
        <router-link :to="item.path">
          <span class="iconfont" :class="item.indexclass"> </span
          >{{ item.text }}
          <span v-if="item.num && $store.state.numall > 0" class="num">{{ $store.state.numall }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      nav: [
        {
          path: "/index",
          icon: true,
          text: "首页",
          indexclass: "icon-shouye",
        },
        {
          path: "/category",
          icon: true,
          text: "分类",
          indexclass: "icon-leimupinleifenleileibie1",
        },
        {
          path: "/shop",
          icon: true,
          text: "购物车",
          indexclass: " icon-gouwuche",
          num: 1,
        },
        {
          path: "/my",
          icon: true,
          text: "我的",
          indexclass: "icon-yonghu",
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 40px;
  background: #f7f9fa;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  padding: 5px 0;
}
.nav .nav-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav .nav-item a {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-decoration: none;
  color: black;
  margin-top: 5px;
  /* 取消高亮 */
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}
.nav .nav-item a .num {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ff734c;
  border-radius: 50%;
  right: 0;
  color: #ccc;
  text-align: center;
  line-height: 15px;
}
.nav .nav-item a span {
  text-align: center;
}
.nav .nav-item a.router-link-active {
  color: #ef734c;
}
</style>
