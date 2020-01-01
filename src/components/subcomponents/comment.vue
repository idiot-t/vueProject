<template>
    <div class="cmt-container">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入评论内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第一楼&nbsp;&nbsp;用户:张帅&nbsp;&nbsp;发表时间：2020-01-01 00:00:00</div>
                <div class="cmt-body">来了老弟</div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="nextPage">加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                pageIndex: 1,//默认展示第一页评论数据
                comments:[]//所有的评论数据
            }
        },
        created () {
            
        },
        props:['id'],//父组件传过来的id值
        methods: {
            getComments(){
                 this.$http.get(''+this.id+'?pageindex='+this.pageIndex).then();
            },
            nextPage(){//加载更多
                this.pageIndex++;
                // getComments();
                alert('正在加载下一页评论数据');
            }
        },

    }
</script>

<style lang="scss" scoped>
.cmt-container{
    h1{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 100px;
        margin-bottom: 0;

    }
    .cmt-list{
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 35px;
                background-color: #ccc;
            }
            .cmt-body{}
        }
    }
}
</style>