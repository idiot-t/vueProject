//入口文件
import Vue from 'vue';
import VueRouter from 'vue-router';//导入路由包
Vue.use(VueRouter);//安装路由
import router from './router.js';//导入路由模块
import VueResource from 'vue-resource';//导入 vue-resource
Vue.use(VueResource);//安装 vue-resource

//按需导入 mint-ui 组件
import {Header, Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入 app 根组件
import app from './app.vue'


//导入 mui 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'//为了拿到额外的一些图标得导入这个样式，并且fonts里面也要添加相应的字体文件

var vm = new Vue({
    el: '#app',
    render: c=>c(app),
    router,//挂载路由对象到实例上

});