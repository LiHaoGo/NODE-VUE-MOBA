<template>
       <m-card :title="title" :icon="icon">
      <div class="nav jc-between">
        <div class="nav-item " v-for="(category,i) in categories" :key="i" :class="{active:isActive == i}" @click="$refs.list.$swiper.slideTo(i)">
          <div class="nav-link">{{category.name}}</div>
        </div>
      </div>
      <swiper :options="{autoHeight:true}" ref="list" @slide-change="()=>isActive = this.$refs.list.$swiper.activeIndex">
        <swiper-slide v-for="(category,i) in categories" :key="i" :class="`bd-${i}`">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </m-card>
</template>
<script>
export default {
      props:{
        title:{type:String,required:true},
        icon:{type:String,required:true},
        categories:{type:Array,required:true}
    },
    data(){
        return{
            isActive:0
        }
    },
 
}
</script>