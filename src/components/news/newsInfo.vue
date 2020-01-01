<template>
    <div class="newsInfo-container">
        <h1 class="title">新闻标题----{{id}}</h1>
        <p class="subtitle">
            <span>发表时间:</span>
            <span>点击次数：0</span>
        </p>
        <hr>
        <div class="content" v-html='newsInfo.content'></div>
        <comment :id="this.id"></comment>
    </div>
</template>

<script>
//导入评论子组件
import comment from '../subcomponents/comment.vue'

    export default {
        data () {
            return {
                id: this.$route.params.id,//将 url地址传递过来的id值，挂载到data上，方便以后调用
                newsInfo: {}
            }
        },
        methods: {
            getNewsInfo(){//获取新闻详情
                this.$http.get('').then(result=>{
                    if(result.body.status==0){ this.newsInfo=result.body.message[0]  }
                    else Toast('获取内容失败');
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>
.newsInfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-around;
    }
    .content{}
}
</style>