<template>
     <div class="card p-3 bg-white mt-3">
      <div class="card-header pb-3 d-flex ">
        <i class="sprite" :class="`sprite-${icon}`"></i>
        <div class="fs-xl flex-grow-1 pl-2">{{title}}</div>
        <i class="sprite sprite-menu"></i>
      </div>
      <div class="card-body pt-3">
      <slot></slot>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{type:String,required:true},
        icon:{type:String,required:true}
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
.card{
    .card-header{
    border-bottom: 1px solid $border-color;
}
border-bottom: 1px solid $border-color;
}
</style>