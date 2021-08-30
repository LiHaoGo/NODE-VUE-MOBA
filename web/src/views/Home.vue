<template>
  <div>
    <!-- swiper start -->
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      :auto-update="true"
      :auto-destroy="true"
    >
      <swiper-slide
        ><img class="w-100" src="../assets/img/1.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/img/2.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/img/3.jpeg" alt=""
      /></swiper-slide>
      <swiper-slide
        ><img class="w-100" src="../assets/img/4.jpeg" alt=""
      /></swiper-slide>
      <div
        class="swiper-pagination text-right paagination-home px-3 pb-2"
        slot="pagination"
      ></div>
    </swiper>
    <!-- end of swiper  -->
    <div class="nav-icons bg-white pt-3 mt-3 text-center">
      <div class="putAway" :style="putAwayText ? '' : 'overflow:auto;'">
        <div
          class="d-flex flex-wrap"
          :style="putAwayText ? '' : 'width:83.0769rem;'"
          :class="putAwayText ? '' : ' flex-flow'"
        >
          <div
            class="nav-item mb-3 text-grey-1"
            :class="putAwayText ? '' : ' border-right'"
            v-for="item in icons"
            :key="item.class"
          >
            <i class="sprite" :class="`sprite-${item.class}`"></i>
            <div class="py-2">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="bg-light d-flex ai-center jc-center py-2 fs-sm">
        <i
          class="sprite sprite-arrow"
          :class="putAwayText ? '' : ' rotateZ'"
        ></i>
        <span class="ml-1" @click="putAway">{{
          putAwayText ? "收起" : "展开"
        }}</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-list-card
      title="新闻资讯"
      icon="news"
      :categories="newsCats">
      <template #items="{category}">
          <ul class="nav-list">
            <router-link :to="`/articles/${newsCats._id}`" tag="li" class="py-3 fs-lg d-flex" v-for="(newsCats,n) in category.newsList" :key="n">
              <span class="nav-tips  fs-sm mr-2 " >{{newsCats.categoryName}}</span>
              <span class="flex-grow-1 text-ellipse pr-2"
                >{{newsCats.title}}</span
              >
              <span class="text-grey">{{newsCats.createdAt | date}}</span>
            </router-link>
          </ul>
      </template>
    </m-list-card>
    <m-list-card  title="英雄列表"
      icon="hero"
      :categories="heroCats" >
           <template #items="{category}">
          <ul class="nav-list d-flex flex-wrap" style="margin:0 -.5rem">
            <router-link tag="li" :to="`/heroes/${hero._id}`" style="width:20%" class="p-2 fs-lg text-center " v-for="(hero,n) in category.heroList" :key="n">
              <img class="w-100" style="border-radius:0.3846rem;" :src="hero.avatar" alt="">
              <div>{{hero.name}}</div>
            </router-link>
          </ul>
      </template></m-list-card>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
// 日期过滤器
  filters:{
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".paagination-home",
          clickable: true, //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        },
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
        },

        loop: true,
      },
      newsCats: [ ],
       heroCats: [ ],
      putAwayText: true,
      icons: [
        {
          class: "coming",
          text: "爆料站",
        },
        {
          class: "stroy",
          text: "故事站",
        },
        {
          class: "shop",
          text: "周边商城",
        },
        {
          class: "experience",
          text: "体验服",
        },
        {
          class: "newPeople",
          text: "新人专区",
        },
        {
          class: "glory",
          text: "荣耀·传承",
        },
        {
          class: "camp",
          text: "王者营地",
        },
        {
          class: "wechat",
          text: "公众号",
        },
        {
          class: "version",
          text: "版本介绍",
        },
        {
          class: "match",
          text: "对局环境",
        },
        {
          class: "share",
          text: "IP共享计划",
        },
        {
          class: "originality",
          text: "创意互动营",
        },
      ],
    };
  },
  methods: {
    putAway() {
      this.putAwayText = !this.putAwayText;
    },
    async fetchNewsCats(){
      const res = await this.$http.get('news/list')
      this.newsCats = res.data
      console.log(this.newsCats);
      
    },
    async fetchHeroCats(){
      const res = await this.$http.get('heroes/list')
      this.heroCats = res.data
      console.log(this.newsCats);
      
    }
  },
  created(){
    this.fetchNewsCats()
    this.fetchHeroCats()
  }
};
</script>
<style lang="scss" >
@import "../assets/scss/_variables.scss";
.paagination-home {
  .swiper-pagination-bullet {
    background: map-get($colors, "white");
    opacity: 1;
    border-radius: 0.1538rem;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border: none;
    }
    &.border-right {
      border-right: 1px solid $border-color !important;
    }
  }
}
.rotateZ {
  transform: rotateZ(180deg);
}
</style>