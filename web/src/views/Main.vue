<template>
    <div>
        <div class="tobar  py-2 px-4 d-flex ai-center">
            <img height="30" src="../assets/img/logo.png" alt="">
            <div class="px-3 flex-grow-1">
            <div class="text-white">王者荣耀</div>
            <div class="text-grey-1 fs-xxs">团队成就更多</div>
            </div>
            <button type="button" class="bg-primary btn sprite-btn"></button>
        </div>
        <div class=" bg-primary pt-3 pb-2">
         <div class="nav jc-around  nav-inverse  pb-1">
             <div class="nav-item active">
                 <router-link class=" nav-link text-light "  to="/">首页</router-link>
             </div>
             <div class="nav-item">
                 <router-link class="nav-link text-light"  to="/">攻略中心</router-link>
             </div>
             <div class="nav-item">
                 <router-link class="nav-link text-light"  to="/">赛事中心</router-link>
             </div>
             <div class="nav-item">
                 <router-link class="nav-link text-light"  to="/">IP新游</router-link>
             </div>
         </div>
        </div>
        <router-view></router-view>
    
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.tobar{
    // 吸顶效果 最新的手机会支持
    position: sticky;
    top:0;
    z-index: 999;
}
</style>