<template>
  <div class="page-hero" v-if="model">
    <div class="tobar py-2 px-4 d-flex ai-center">
      <img height="30" src="../assets/img/logo.png" alt="" />
      <div class="px-3 flex-grow-1">
        <div class="text-white">
          王者荣耀 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;攻略战
        </div>
      </div>
      <router-link tag="div" to="/" class="text-light"
        >更多英雄 &gt;</router-link
      >
    </div>
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 h-100 d-flex jc-end flex-column">
        <div>{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div>{{ model.categories.map((v) => v.name).join("/") }}</div>
        <div class="d-flex jc-between">
        <div v-if="model.scores" class="scores">
        <span>难度</span>
        <span
          class="badge"
          :class="`hero-attr1-${model.scores.difficult}`"
        ></span>
        <span>技能</span>
        <span class="badge px-2" :class="`hero-attr2-${model.scores.skills}`"></span>
        <span>攻击</span>
        <span class="badge" :class="`hero-attr3-${model.scores.attack}`"></span>
        <span>生存</span>
        <span
          class="badge"
          :class="`hero-attr4-${model.scores.survive}`"
        ></span>
        </div>
         <router-link tag="span" to="/" class="text-light fs-sm">
          皮肤 : 2 &gt;
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      required: true,
    },
  },
  data() {
    return {
      model: null,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>
<style lang="scss">
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat to center;
    background-size: auto 100%;
    span{
      display: inline-block;
      margin-right: 5px;
    }
    .badge {
      background-image: url("../assets/img/hero-attrsp.png");
      background-size: 150px 169px;
      width: 15px;
      height: 15px;
      display: inline-block;
      line-height: 15px;
      vertical-align:middle;
      
    }
    .info{
      background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
    }
  }
}
</style>
