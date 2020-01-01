import VueRouter from 'vue-router';

//导入对应的路由组件
import homeContainer from '../src/components/tabbar/homeContainer.vue'
import memberContainer from '../src/components/tabbar/memberContainer.vue'
import shopcarContainer from '../src/components/tabbar/shopcarContainer.vue'
import searchContainer from '../src/components/tabbar/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
//创建路由对象
var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homeContainer },
        { path: '/member', component: memberContainer },
        { path: '/shopcar', component: shopcarContainer },
        { path: '/search', component: searchContainer },
        { path: '/home/newsList', component: newsList },
        { path: '/home/newsInfo/:id', component: newsInfo }
    ],
    linkActiveClass: 'mui-active',//设置高亮（mui-active是mui提供的高亮类）
});

//把路由对象暴露出去
export default router