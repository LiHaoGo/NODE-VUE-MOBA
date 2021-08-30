<template>
  <div class="page-article" v-if="model">
   <div class="d-flex py-3 px-2 bd-bottom">
     <i class="backbg px-2" @click="$router.go(-1)"></i>
     <strong class="flex-grow-1 px-2 text-ellipse fs-xl text-title">{{model.title}}</strong>
     <div class="text-grey fs-xs">
       2021-08-27
     </div>
   </div>
   <div v-html="model.body" class="px-3 body" ></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      model:null
    }
  },
  methods:{
   async  fetch(){
     const res = await this.$http.get(`/articles/${this.id}`)
     this.model = res.data
    }
  },
  created(){
    this.fetch()
  }
}
</script>
<style lang="scss" >
.backbg{
    background: url('../assets/img/backBg.png') no-repeat 0 0;
	background-size: 0.6154rem 1.0769rem;
	width: 0.6154rem;
	height: 1.0769rem;
}

.page-article{
  .body{
    p{
     img{
       width: 100%;
       height: auto;
     }
    }
    iframe{
      width: 100%;
      height: auto;
    }
  }
}
</style>