<template>
  <div index='1'>
      <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <!-- 在组件中使用v-for 的话一定要绑定 :key="item.url" -->
      <!-- <mt-swipe-item v-for="item in lunboList" :key="item.url">
          <img :src="item.url">
      </mt-swipe-item> -->
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格区域 改造为六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/1.jpg">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/2.jpg">
                <div class="mui-media-body">图片分享</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/3.jpg">
                <div class="mui-media-body">商品购买</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/4.jpg">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/5.jpg">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/6.jpg">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data () {
        return {
            index:1,
            lunboList: [],//保存轮播图的数组
        }
    },
    methods: {
        // getLunbo(){//获取轮播图数据的方法
        //     this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
        //         if(1){//成功
        //             this.lunboList = result.body.message;
        //         }else{//失败
        //             Toast('加载轮播图失败！！！');
        //         }
        //     });
        // }
    },
    created () {
        // this.getLunbo();
    }
};
</script>

<style lang="scss" scoped>
.mint-swipe{//轮播图
    height: 200px;
    .mint-swipe-item{//轮播的每个区域
        &:nth-child(1){// & 的用处
            background-color: red;
        }
        &:nth-child(2){// & 的用处
            background-color: blue;
        }
        &:nth-child(3){// & 的用处
            background-color: pink;
        }
        img{//让获取的图片适应容器的大小
            width: 100%;
            height: 100%;
        }
    }
}
//ul
.mui-grid-view.mui-grid-9{//去引入的组件中找到对应的原因，然后复制设置样式的选择器重新设置一些样式
    border: none;
    background-color: #fff;
}
//九宫格ul下的li
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    img{
        width: 100px;
        height: 100px;
    }
    .mui-media-body{
        font-size: 13px;
    }
    border: none;
}
</style>