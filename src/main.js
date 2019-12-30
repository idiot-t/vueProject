//入口文件
import Vue from 'vue';
//按需导入 mint-ui 组件
import {Header} from 'mint-ui';
Vue.component(Header.name, Header);
//导入 app 根组件
import app from './app.vue'


//导入 mui 样式
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c=>c(app),

});