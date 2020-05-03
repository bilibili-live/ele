<template>
  <div>
    <view-box
      class="head"
      body-padding-top="44px"
      body-padding-bottom="0px"
      style="position: relative;"
    >
      <div class="mask" :style="{ backgroundImage: `url(${ store.avatar })` }"></div>
      <div class="flex justify-between">
        <div class="align-center flex" style="margin: 0 14px">
          <x-img class="avatar" :src="store.avatar" />
          <div style="margin: 0 12px;margin-left: 24px">
            <p style="margin: 4px 0 0;font-size: 1.2rem">{{ store.title }}</p>
            <span style="margin-bottom: 2px;font-size:.8rem">{{ store.transport }}</span>
            <br />
            <span style="margin-bottom: 2px;font-size:.8rem">{{ store.promotions.format }}</span>
          </div>
        </div>
        <div class="align-center flex">
          <span class="next-icon align-center flex" @click="storeModal = true">
            {{ 5 }} 个
            <x-icon type="ios-arrow-forward" size="20"></x-icon>
          </span>
        </div>
      </div>
      <div
        style="text-indent: .6rem;margin: 8px 0;width: 100%;padding: 0 8px;box-sizing: border-box;"
      >
        <span class="tips" style="font-size: 12px">
          <badge text="123" style="margin-right: 5px" />
          {{ store.tips }}
        </span>
      </div>
    </view-box>

    <sticky :offset="46">
      <tab :line-width="1">
        <tab-item
          style="cursor: pointer"
          v-for="(item, index) in menuItem"
          :selected="menuActive === index"
          :key="index"
          @on-item-click="clickMenuItem(index)"
        >{{ item.text }}</tab-item>
      </tab>
    </sticky>

    <div class="flask" style="height:63.333vh;position: relative">

      <div class="menu-item" style="padding-bottom: 50px;overflow: hidden" :style="menuBoxStyle[0]" :class="menuActive === 0 ? 'active' : ''">
        <div class="scroll-wrapper">
          <div class="scroll-left">
            <flexbox orient="vertical" :gutter="0">
              <flexbox-item v-for="(item, index) in menus" :key="index">
                <span
                  :class="[ menuActiveIndex === index ? 'active' : '']"
                  @click="handleScrollEvent(index)"
                  class="scroll-menu-item"
                >{{ item.text }}</span>
              </flexbox-item>
            </flexbox>
          </div>
          <div class="scroll-right" ref="box">
            <ul>
              <li :ref="`food-item-${ index }`" v-for="(item, index) in foods" :key="index">
                <h1 class="title">{{ item.title }}</h1>
                <ul>
                  <li class="view" v-for="(subItem, subIndex) in item.food" :key="subIndex">
                    <div class="img">
                      <img :src="subItem.img" width="50" />
                    </div>
                    <div class="content">
                      <h2 class="name">{{ subItem.title }}</h2>
                      <p class="desc">{{ subItem.type }}</p>
                      <div class="extra">
                        <span class="count">月售{{ subItem.mon }}份</span>
                        <span>好评率{{ subItem.rate }}%</span>
                      </div>
                      <div class="price">
                        <span class="now">￥{{ subItem.price }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="menu-item" style="overflow-y: auto" :style="menuBoxStyle[1]" :class="menuActive === 1 ? 'active' : ''">
        <div class="board">
          <div class="board-left">
            <h1 class="score">3.6</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家69.2%</div>
          </div>
          <div class="board-right">
            <div>服务态度 <rater /> </div>
            <div>商品评分 <rater /> </div>
            <div>送达时间 <rater /> </div>
          </div>
        </div>
        <divider>{{ "评论区" }}</divider>
        <div>
          <button-tab class="fixed-sticky">
            <button-tab-item>全部</button-tab-item>
            <button-tab-item selected>好评</button-tab-item>
            <button-tab-item>差评</button-tab-item>
          </button-tab>
          <div class="comment-list">
            <ul>
              <li class="flexbox" v-for="(item,i) in 20" :key="i">
                <div class="avatar">
                  <img width="50" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
                </div>
                <div class="content flexbox-line">
                  <div class="flexbox">
                    <span class="flexbox-line">周某人</span>
                    <span>2019-04-02</span>
                  </div>
                  <div>
                    <rater />
                  </div>
                  <div>
                    {{ '你是好笑, 我是笑不出来' }}
                  </div>
                  <div class="tags" style="box-sizing: border-box; padding: 4px 0">
                    <span class="x-tag" v-for="(tag, i) in 10" :key="i">草</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="menu-item" style="overflow-y: auto;background: rgba(7,17,27,.1)" :style="menuBoxStyle[2]" :class="menuActive === 2 ? 'active' : ''">
        <div style="background: #fff; padding: 4px 0 8px">
        <div class="flexbox store-info">
          <div class="flexbox-line" style="flex: 4">
            <div class="title">周某人</div>
            <div class="flexbox" style="align-items: center;">
              <rater style="margin-right: 8px" /> (24) 月售单
            </div>
          </div>
          <div class="flexbox-line text-center">
            <x-icon type="ios-heart-outline" size="30"></x-icon>
            <p>收藏</p>
          </div>
        </div>
        <div class="flexbox store-type">
          <div class="vux-1px-r">
            <span>起送价</span>
            <div class="big">30 <span>元</span></div>
          </div>
          <div class="vux-1px-r">
            <span>商家配送</span>
            <div class="big">4 <span>元</span></div>
          </div>
          <div class="vux-1px-r">
            <span>平均配送时间</span>
            <div class="big">38 <span>分钟</span></div>
          </div>
        </div>
        </div>
        <div style="margin: 8px 0;padding: 8px;background: #fff">
          <h2 style="font-size: 16px">公告与活动</h2>
          <div style="margin-left: 12px">
          <div class="ctx" style="color:red">{{ '这是内容' }}</div>
          <ul style="list-style: none;margi: 0; padding: 0">
            <li
            class="vux-1px-b"
            style="padding: 8px 0; margin-top: 8px;padding-left: 18px"
            v-for="(item, i) in 10" :key="i"
            >
              周某在线
            </li>
          </ul>
          </div>
        </div>
      </div>

    </div>

    <!-- 购物车 -->
    <div class="shopcart" :style="{ transform: menuActive === 0 ? 'translateY(0)' : 'translateY(40vh)'}">
      <div class="content">
        <div class="content-left">
          <div style="width: 24px; height: 24px;position: relative;">
            <img src="@/assets/store.svg" style="width: 240%;position: absolute;top: -25px;left: -40px;" alt="">
          </div>
          <div class="price" style="margin-right: 8px">￥0</div>
          <div class="desc">另需配送费￥4元</div>
        </div>
        <div class="content-right">
          <div class="pay not-enough">￥20元起送</div>
        </div>
      </div>
    </div>

    <!-- dialog -->
    <div class="dialog" :class="storeModal ? 'active' : ''">
      <div class="title text-center">
        <p>粥品香坊（回龙观）</p>
        <rater />
      </div>
      <divider>我是有底线的</divider>
      <div>
        <ul>
          <li v-for="(item, index) in 5" :key="index">{{  '不打工警告' }}</li>
        </ul>
      </div>
      <divider>我是有底线的</divider>
      <div>
        <ul>
          <li v-for="(item, index) in 5" :key="index">{{  '不打工警告' }}</li>
        </ul>
      </div>
      <div class="close">
        <x-icon @click="storeModal = false" type="ios-close-empty" size="30"></x-icon>
      </div>
    </div>

  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Badge, Flexbox, FlexboxItem, Divider, Rater, ButtonTab, ButtonTabItem } from "vux";
import scrollTop, { handleViewBoxScroll, getEleIndex } from "@/utils/scroll";

export default {
  components: {
    Tab,
    TabItem,
    Sticky,
    Badge,
    Flexbox,
    FlexboxItem,
    Divider,
    Rater,
    ButtonTab,
    ButtonTabItem
  },
  data() {
    return {
      menuActive: 2,
      menuItem: [
        {
          text: "商品"
        },
        {
          text: "评价"
        },
        {
          text: "商家"
        }
      ],
      menuBoxStyle: [
        {
          transform: `translateX(100vw)`
        },
        {
          transform: `translateX(100vw)`
        },
        {
          transform: `translateX(100vw)`
        }
      ],
      storeModal: false,
      store: {
        avatar: `https://i.loli.net/2020/05/03/n8OFkENuxXRemAC.png`,
        title: "南宁周某忘了爱",
        transport: "周某电瓶车在线买",
        promotions: {
          format: "在线支付满28减5, xx满星星"
        },
        tips: "开局一条狗, 其他的全靠打，是兄弟你就来砍我啊!"
      },
      menuActiveIndex: 0,
      menus: [
        {
          text: "热销榜"
        },
        {
          text: "水果"
        },
        {
          text: "小菜"
        },
        {
          text: "优惠"
        }
      ],
      foods: [
        {
          title: "热销榜",
          food: [
            {
              title: "热销榜",
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              type: "点心",
              price: 10,
              mon: 100,
              rate: 80
            }
          ]
        },
        {
          title: "水果",
          food: [
            {
              title: "水果",
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              type: "点心",
              price: 10,
              mon: 100,
              rate: 80
            }
          ]
        },
        {
          title: "小菜",
          food: [
            {
              title: "小菜",
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              type: "点心",
              price: 10,
              mon: 100,
              rate: 80
            }
          ]
        },
        {
          title: "优惠",
          food: [
            {
              title: "优惠",
              img:
                "http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114",
              type: "点心",
              price: 10,
              mon: 100,
              rate: 80
            }
          ]
        }
      ]
    };
  },
  created() {
    this.$nextTick(async () => {
      handleViewBoxScroll(this.$refs["box"], res => {
        const index = getEleIndex({
          top: res.top,
          _this: this,
          prefix: "food-item-$",
          len: 25
        });
        this.menuActiveIndex = index;
      });
    });
  },
  methods: {
    handleScrollEvent(index) {
      try {
        this.menuActiveIndex = index;
        const ele = this.$refs[`food-item-${index}`];
        let offsetTop = ele[0].offsetTop;
        const box = this.$refs["box"];
        scrollTop(box, offsetTop, 200);
      } catch (error) {
        throw new Error(error);
      }
    },
    clickMenuItem(index) {
      const _old = this.menuActive;
      // TODO
      if (_old < index) {
        switch (index) {
          case 0:
            this.changeMenuStyle(0, "left");
            this.changeMenuStyle(1, "right");
            this.changeMenuStyle(2, "right");
            break;
          case 1:
            this.changeMenuStyle(0, "right");
            this.changeMenuStyle(1, "left");
            this.changeMenuStyle(2, "left");
            break;
          case 2:
            this.changeMenuStyle(0, "right");
            this.changeMenuStyle(1, "right");
            this.changeMenuStyle(2, "left");
            break;
        }
      }
      this.menuActive = index;
    },
    changeMenuStyle(index, direction) {
      let val = "-100vw"
      if (direction == "right") val = "100vw"
      this.menuBoxStyle[index].transform = `transform(${val})`
    }
  }
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>