<template>
  <div>
    <div class="showbox1" v-for="(item, index) in showbox" :key="index">
      <h2>{{ item.title }}</h2>
      <ul>
        <li v-for="(value, index) in item.showbox" :key="index">
          <router-link :to="'/index/detailpage?id=' + value.id">
            <img :src="value.img" alt="" />
            <div>
              <span class="text">{{ value.text }}</span>
              <div>
                <span class="newprice">￥{{ value.newprice }}</span>
                <span class="oldprice">{{ value.oldprice }}</span>
                <span>{{ value.sell }}</span>
                <i
                  class="iconfont icon-gouwuche"
                  @click.prevent="addshop(value, item)"
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
      showbox: [
        {
          text: "[鲜花]",
          title: "永生花系列",
          //永生花
          showbox: [
            {
              id:15,
              img: "/images/index/show15.jpg",
              text:
                "我如此爱你-口红款999·专柜正品Dior#999口红＋进口永生玫瑰礼盒",
              newprice: 598,
              oldprice: "¥698",
              sell: "已销售6787件",
            },
            {
              id: 16,
              img: "/images/index/show16.jpg",
              text: "一鹿(路)有你永生花小夜灯·永生花礼盒",
              newprice: 298,
              oldprice: "¥389",
              sell: "已销售431件",
            },
            {
              id: 18,
              img: "/images/index/show17.jpg",
              text:
                "爱与祝福·紫心奥斯汀玫瑰1朵，进口粉色康乃馨1枝，浅粉桃色小玫瑰2朵",
              newprice: 198,
              oldprice: "¥356",
              sell: "已销售7189件",
            },
            {
              id: 17,
              img: "/images/index/show18.jpg",
              text: "爱的小屋永生花灯光蓝牙音箱/浪漫粉·创意蓝牙音箱",
              newprice: 398,
              oldprice: "¥498",
              sell: "已销售56件",
            },
          ],
        },
        {
          text: "[蛋糕]",
          title: "蛋糕系列",
          //蛋糕
          showbox: [
            {
              id: 19,
              img: "/images/index/show19.jpg",
              text: "小精灵（6寸）·",
              newprice: 198,
              oldprice: "¥298",
              sell: "已销售164件",
            },
            {
              id: 20,
              img: "/images/index/show20.jpg",
              text: "（新款）榴芒双拼(约2磅)·双拼蛋糕",
              newprice: 218,
              oldprice: "¥276",
              sell: "已销售1856件",
            },
            {
              id:21,
              img: "/images/index/show21.jpg",
              text: "蝶恋花景(8寸)·元祖鲜奶蛋糕，布丁加水果夹层",
              newprice: 258,
              oldprice: "¥358",
              sell: "已销售2566件",
            },
            {
              id: 22,
              img: "/images/index/show22.jpg",
              text: "鲜果缤纷·2磅(8寸)水果蛋糕",
              newprice: 179,
              oldprice: "¥209",
              sell: "已销售3536件",
            },
          ],
        },
        {
          text: "[礼品]",
          title: "礼品系列",
          //礼品
          showbox: [
            {
              id: 23,
              img: "/images/index/show23.jpg",
              text: "woody手工气泡玻璃小鹿灯（海天蓝）·",
              newprice: 168,
              oldprice: "¥268",
              sell: "已销售155件",
            },
            {
              id: 26,
              img: "/images/index/show24.jpg",
              text: "林深时见鹿/创意卡通小鹿小夜灯led实木台灯·创意小鹿台灯",
              newprice: 268,
              oldprice: "¥368",
              sell: "已销售41件",
            },
            {
              id: 25,
              img: "/images/index/show25.jpg",
              text:
                "迪奥口红2支(#520+#999)+迪奥花漾淡香水50ml·Dior口红香水礼盒套装",
              newprice: 1398,
              oldprice: "¥1498",
              sell: "已销售261件",
            },
            {
              id: 24,
              img: "/images/index/show26.jpg",
              text: "星期耳钉礼盒·s925银个性耳钉",
              newprice: 198,
              oldprice: "¥298",
              sell: "已销售1566件",
            },
          ],
        },
        {
          text: "[巧克力]",
          title: "巧克力系列",
          //巧克力
          showbox: [
            {
              id: 27,
              img: "/images/index/show27.jpg",
              text: "光板金樽礼遇多口味夹心巧克力礼盒装25颗·夹心巧克力25颗",
              newprice: 99,
              oldprice: "¥199",
              sell: "已销售291件",
            },
            {
              id: 28,
              img: "/images/index/show28.jpg",
              text: "Felchlin妃亭12粒装巧克力礼盒·德国手工夹心巧克力",
              newprice: 238,
              oldprice: "¥289",
              sell: "已销售1431件",
            },
            {
              id: 29,
              img: "/images/index/show29.jpg",
              text: "巧克巧蔻定制16粒装手工夹心巧克力·手工夹心巧克力",
              newprice: 288,
              oldprice: "¥356",
              sell: "已销售4189件",
            },
            {
              id: 30,
              img: "/images/index/show30.jpg",
              text:
                "德国进口LAUENSTEIN巧克力手工松露酒味夹心金装礼盒·德国进口酒心黑巧克力20粒",
              newprice: 318,
              oldprice: "¥418",
              sell: "已销售28件",
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
};
</script>

<style scoped>
.showbox1 {
  width: 100%;
  background: #fff;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.showbox1 h2 {
  font-size: 20px;
  text-align: center;
  font-weight: normal;
}
.showbox1 .many {
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
.showbox1 ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  box-sizing: border-box;
  margin-top: 10px;
  padding: 0 5px;
  justify-content: space-around;
  box-sizing: border-box;
}
.showbox1 ul router-link {
  display: flex;
}
.showbox1 ul li {
  width: 50%;
  border: 1px solid#ccc;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.showbox1 ul li img {
  width: 100%;
  height: 192px;
}
.showbox1 ul li div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.showbox1 ul li div .text {
  width: 100%;
}
.showbox1 ul li div .active {
  color: #232628;
  font-weight: bold;
}
.showbox1 ul li div .newprice {
  font-size: 16px;
  color: #ff734c;
}
.showbox1 ul li div .oldprice {
  font-size: 12px;
  text-decoration: line-through;
  position: absolute;
  left: 50px;
  top: 5px;
}
.showbox1 ul li div div {
  width: 100%;
  position: relative;
  display: flex;
}
.showbox1 ul li div div i {
  position: absolute;
  right: 10px;
}
.showbox1 ul li div span {
  font-size: 12px;
  color: #71797f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
