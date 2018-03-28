<template>
<transition name="slide">
    <div class="content artile_detail">
        <div class="container-fluid" v-for="item in detailList">
            <div class="base_info">
                <h1 class="article-title">{{item.title}}</h1>
                <p class="article-author">
                    <span>作者</span>{{item.author}}</p>
                <p class="time-soon">
                    <span>{{item.date_entered.replace(/-/g,".")}}</span>
                    <span>字数 {{item.content.replace(/<.*?>/ig,"").length}}</span>
                    <span>阅读 {{item.scan_amount-0+1}}</span>
                </p>
            </div>
            <div class="detail" v-html="item.content">
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            detailList:[]
        }
    },
    computed: {
        ...mapGetters([
            'articleId'
        ])
    },
    created() {
        console.log(this.articleId + ";;;;;;;")
        this.getDetail()
    },
    methods: {
        getDetail() {
            var _this = this;
            this.$ajax.post('/api/getArticleDetail', { articleId: this.articleId })
                .then(function(res) {
                    console.log(res);
                    _this.detailList = res.data;
                })
                .catch(function(err) {
                    console.log(err)
                })
        }
    }
}
</script>

<style>
.artile_detail{
  position:fixed;
  z-index:100;
  /*top:0;*/
  left:0;
  bottom:0;
  right:0;
  width:100%;
  background:#fff}
.slide-enter-active,.slide-leave-active
  {transition:all 0.3s}
.slide-enter,.slide-leave-to
  {transform:translate3d(100%,0,0)}
</style>
