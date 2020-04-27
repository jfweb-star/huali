import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";
import category from "../views/Category.vue";
import shop from "../views/shop.vue";
import my from "../views/my.vue";
import detailpage from "../views/detailpage.vue";
import login from "../views/login.vue";
import advertising from "../views/advertising.vue";


//1 引入相对应的组件
Vue.use(VueRouter);

const routes = [
  // {
  //   // 重定向首页
  //   path: '/',
  //   redirect: '/index',
  //   meta: { //不同页面中控制底部导航的显示隐藏
  //     showTabbar: true
  //   }

  // },
  {
    // 广告
    path: "/advertising",
    name: "advertising",
    component: advertising,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: false
    }
  },
  {
    // 首页
    path: "/index",
    name: "index",
    component: index,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: true
    }

  },
  {
    // 首页二级路由详情页
    path: "/index/detailpage/",
    name: "detailpage",
    component: detailpage,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: false
    }
  },
  // 分类
  {
    path: "/category",
    name: "category",
    component: category,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: true
    }

  },
  // 商务车
  {
    path: "/shop",
    name: "shop",
    component: shop,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: true
    }

  },
  // 我的
  {
    path: "/my",
    name: "my",
    component: my,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: true
    }

  },
  {
    // 用户二级路由登录注册
    path: "/my/login",
    name: "login",
    component: login,
    meta: { //不同页面中控制底部导航的显示隐藏
      showTabbar: false
    }
  },
];

const router = new VueRouter({
  //html5模式    访问路径没用#号
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next('/advertising');

  } else {
    next();

  }
})
export default router;