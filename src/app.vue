<template>
  <div class="app-container">
    <!-- 顶部区域 -->
    <mt-header fixed title="张帅的vue项目"></mt-header>
    <!-- 顶部区域 -->

    <!-- 中间的路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 中间的路由 router-view 区域 -->

    <!-- 底部的 tab-bar 区域 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <!-- 底部的 tab-bar 区域 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "父亲的index",
      curIndex: 1, //当前组件索引
      isLeftIn: false,
      isRightOut: false
    };
  },
  
};
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow: hidden;
}
.v-enter {
  opacity: 0;
  transform: translate(100%);
}
.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translate(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: 0.4s;
}
</style>


