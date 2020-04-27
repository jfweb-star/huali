<template>
  <div id="app">
    <!-- 组件渲染出口 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- App导航  使用组件-->
    <my-footer v-if="globarnav"></my-footer>
  </div>
</template>
<script>
// 引入vue组件
import Footer from "./components/footer.vue";
export default {
  name: "app",
  data() {
    return {
      globarnav: true,
      zzc: true,
    };
  },
  components: {
    //注册组件
    myFooter: Footer,
  },
  watch: {
    '$route.path'(newVal){
      if (newVal == "/index/detailpage") {
        console.log(newVal)
        this.globarnav = false;
      }else{
        this.globarnav = true;

      }
    },
  },
  methods: {

  },
  created() {
    this.$store.commit('num');
  },
};
</script>
<style lang="scss">
html,
body {
  width: 100%;
  background: #e9ecf0;
}
* {
  margin: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
#app {
  width: 100%;
  height: 100%;
}

</style>
