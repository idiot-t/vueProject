<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsInfo/'+1"><!--在连接一个 item.id来展示对应 id的新闻内容-->
          <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">
              <span>发表时间：2020-01-01 00:00:00</span>
              <span>点击:0次</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data () {
        return {
            newsList:[]//新闻列表
        }
    },
    created () {
    //   this.getNewsList();  
    },
    methods:{
        getNewsList(){
            //获取新闻列表
            this.$http.get('').then(result=>{
                if( result.body.status==0 ){
                    //获取数据后把数据保存到data 上
                    this.newsList=result.body.message;
                }else{
                    Toast('获取新闻列表失败');
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.mui-table-view{
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}


</style>