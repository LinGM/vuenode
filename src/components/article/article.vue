<template>
	<div class="article">
		<div class="content front-note">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-3 col-xs-6" v-for="item in articleList">
						<div :style="{backgroundImage:'url('+item.img+')'}" @click="showDetail(item.article_id)">
							<a target="_blank">
								<div class="slide-item">
									<p class="article-title">{{item.title}}</p>
									<p class="article-content">{{item.content.replace(/<.*?>|&NBSP;/ig,"").slice(0,30)}}</p>
									<div class="row">
										<div class="col-xs-7">
											<i class="iconfont icon-author"></i>
											<span class="author">{{item.author}}</span>
										</div>
										<div class="col-xs-5">
											<i class="iconfont icon-scan"></i>
											<span class="scan-amount">{{item.scan_amount}}</span>
										</div>
									</div>
									<div class="mask"></div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="page clearfix">
					<div id="pagination-box" class="fr"></div>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/ecmascript">
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			articleList: []
		}
	},
	created() {
		this._getAllArticle();
		console.log("article")
	},
	methods: {
		_getAllArticle() {
			var _this = this;
			this.$ajax.get('/api/getAllArticle')
				.then(function(res) {
					_this.articleList = res.data;
					for (var i = 0; i < _this.articleList.length; i++) {
						_this.articleList[i].img = _this.articleList[i].content.match(/src=\"(\S*)\"\ /) == null ? null : _this.articleList[i].content.match(/src=\"(\S*)\"\ /)[1];
					}
					console.log(res)
				})
				.catch(function(err) {
					console.log(err)
				})
		},
		showDetail(id) {
			this.$router.push({
				path:`article/${id}`
			})
		console.log("点文章"+id)
			this.setArticleId(id)
		},
		...mapMutations({
			setArticleId: 'SET_ARTICLE_ID'
		})
	}

}
</script>

<style>

</style>
