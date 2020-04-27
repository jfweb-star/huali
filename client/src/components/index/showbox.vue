<template>
  <div>
    <div class="showbox" v-for="(item, index) in box1" :key="index">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(value, index) in item.showbox" :key="index">
          <router-link :to="'/index/detailpage?id=' + value.id">
            <img :src="value.img" alt="" />
            <div>
              <span>{{ value.text }}</span>
              <span>{{ value.introduce }}</span>
              <span class="active">{{ value.brief }}</span>
              <div>
                <span class="newprice">￥{{ value.newprice }}</span>
                <span class="oldprice">{{ value.oldprice }}</span>
                <span>{{ value.sell }}</span>
                <i
                  class="iconfont icon-gouwuche"
                  @click.prevent="addshop(value, item, index)"
                ></i>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <a class="many" href="##">查看更多</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      box1: [
        {
          text: "[鲜花]",
          title: "送恋人/爱情鲜花",
          //爱情之花
          showbox: [
            {
              id: 1,
              img: "/images/index/show1.jpg",
              text: "一往情深",
              introduce: "精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎",
              brief: "经典爆款，年销售冠军！",
              newprice: 248,
              oldprice: "¥315",
              sell: "已销售12.0万件",
            },
            {
              id: 2,
              img: "/images/index/show2.jpg",
              text: "一心一意",
              introduce: "玫瑰11枝，粉色勿忘我0.3扎",
              brief: "经典款式 精选爆款",
              newprice: 139,
              oldprice: "¥189",
              sell: "已销售11.7万件",
            },
            {
              id: 3,
              img: "/images/index/show3.jpg",
              text: "忘情巴黎",
              introduce: "33枝红玫瑰",
              brief: "浪漫唯美 女神挚爱",
              newprice: 298,
              oldprice: "¥382",
              sell: "已销售6.7万件",
            },
            {
              id: 4,
              img: "/images/index/show4.jpg",
              text: "韩式系列/亲爱的你",
              introduce:
                "粉佳人玫瑰16枝、白和粉色洋桔梗各5枝、尤加利10枝、浅紫色小菊3枝、深粉色绣球1枝",
              brief: "花艺师打造 韩式花束系列",
              newprice: 368,
              oldprice: "¥469",
              sell: "已销售734件",
            },
            {
              id: 5,
              img: "/images/index/show5.jpg",
              text: "不变的承诺",
              introduce: "99枝红玫瑰",
              brief: "经典99枝，鼎力推荐！",
              newprice: 520,
              oldprice: "¥869",
              sell: "已销售7.5万件",
            },
            {
              id: 6,
              img: "/images/index/show7.jpg",
              text: "恋恋情深",
              introduce: "11枝香槟玫瑰，白色多头百合2枝",
              brief: "经典款式 简约设计",
              newprice: 198,
              oldprice: "¥255",
              sell: "已销售7.5万件",
            },
            {
              id: 7,
              img: "/images/index/show6.jpg",
              text: "韩式系列/初心不负",
              introduce:
                " 韩式花束系列花艺师全新打造，卡罗拉玫瑰11枝、白底粉边洋桔梗5枝、大叶尤加利10枝",
              brief: "花艺师打造 韩式花束系列",
              newprice: 229,
              oldprice: "¥298",
              sell: "已销售6.7万件",
            },

            {
              id: 8,
              img: "/images/index/show8.jpg",
              text: "爱在心头",
              introduce: "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",
              brief: "双色搭配 赏心悦目",
              newprice: 398,
              oldprice: "¥479",
              sell: "已销售2.0万件",
            },
          ],
        },
        {
          text: "[鲜花]",
          title: "送长辈",
          //送长辈
          showbox: [
            {
              id:9,
              img: "/images/index/show10.jpg",
              text: "母爱",
              introduce: "紫红色康乃馨9枝，粉色多头康乃馨10枝",
              brief: "红粉搭配  花色明艳",
              newprice: 139,
              oldprice: "¥189",
              sell: "已销售11.7万件",
            },
            {
              id:10,
              img: "/images/index/show9.jpg",
              text: "留住好时光",
              introduce: "粉绣球1枝，粉雪山玫瑰6枝",
              brief: "精选昆明A级花材",
              newprice: 162,
              oldprice: "¥228",
              sell: "已销售1.6万件",
            },
            {
              id:12,
              img: "/images/index/show11.jpg",
              text: "韩式系列/温柔以待",
              introduce:
                "粉色康乃馨13枝，戴安娜玫瑰5枝、粉色洋桔梗5枝、浅紫紫罗兰5枝、尤加利10枝",
              brief: "韩式系列 母亲节新品",
              newprice: 239,
              oldprice: "¥299",
              sell: "已销售175件",
            },
            {
              id:11,
              img: "/images/index/show12.jpg",
              text: "幸福绽放",
              introduce: "粉色康乃馨19枝",
              brief: "温暖之选 亮丽花色",
              newprice: 172,
              oldprice: "¥215",
              sell: "已销售1.3万件",
            },
            {
              id:14,
              img: "/images/index/show13.jpg",
              text: "健康长久",
              introduce: "红色康乃馨99枝、多头红色康乃馨1扎",
              brief: "红色康乃馨  华丽感十足",
              newprice: 436,
              oldprice: "¥539",
              sell: "已销售6339件",
            },
            {
              id:13,
              img: "/images/index/show14.jpg",
              text: "恩情无限",
              introduce: " 粉色康乃馨11枝，百合2枝",
              brief: "精选花材 精心设计",
              newprice: 178,
              oldprice: "¥232",
              sell: "已销售1.3万件",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 添加商品到购物车
    addshop(value, item) {
      console.log(value);

      let shopall = window.localStorage.getItem("shopall") || [];
      let all = [];
      let shopcar = {
        img: value.img,
        text: item.text,
        name: value.text,
        price: value.newprice,
        num: 1,
        mes: true,
      };
      // 判断缓存中是否有shopall

      if (shopall.length == 0) {
        this.$store.commit("add");
        this.$store.state.shopall.push(shopcar);
        console.log(this.$store.state.shopall);
        all.push(shopcar);
        window.localStorage.setItem("shopall", JSON.stringify(all));
      } else {
        //当里面有数据时 判断是否跟shopcar的值相等
        let shopAll = JSON.parse(shopall);
        console.log(typeof shopcar);
        console.log(typeof shopAll);
        console.log(shopcar);
        console.log(typeof shopAll);
        for (let i = 0; i < shopAll.length; i++) {
          if (shopAll[i].name == shopcar.name) {
            // shopAll[i].num++;
            // // this.$store.commit("add");
            // window.localStorage.setItem("shopall", JSON.stringify(shopAll));
            return;
          }
        }
        console.log("添加成功");
        shopAll.push(shopcar);
        window.localStorage.setItem("shopall", JSON.stringify(shopAll));
        this.$store.commit("add");
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
/* 主页展示图片 */
.showbox {
  width: 100%;
  background: #fff;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.showbox h2 {
  font-size: 20px;
  text-align: center;
  font-weight: normal;
}
.showbox .many {
  display: block;
  width: 96px;
  height: 26px;
  background: #fff;
  border: 1px solid #232628;
  font-size: 14px;
  text-align: center;
  line-height: 26px;
  margin: 10px 0;
  text-decoration: none;
  color: #232628;
}
.showbox ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0 5px;
}
.showbox ul router-link {
  display: flex;
}
.showbox ul li {
  width: 100%;
  border: 1px solid#ccc;
  /* display: flex; */
  /* justify-content: space-around; */
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
}
.showbox ul li a {
  width: 100%;
  display: flex;
}
.showbox ul li img {
  width: 176px;
  height: 192px;
}
.showbox ul li div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.showbox ul li div .active {
  color: #232628;
  font-weight: bold;
}
.showbox ul li div .newprice {
  font-size: 16px;
  color: #ff734c;
}
.showbox ul li div .oldprice {
  font-size: 12px;
  text-decoration: line-through;
  position: absolute;
  left: 45px;
  top: 5px;
}
.showbox ul li div div {
  width: 100%;
  position: relative;
  display: flex;
}
.showbox ul li div div i {
  position: absolute;
  right: 20px;
}
.showbox ul li div span {
  font-size: 12px;
  color: #71797f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
