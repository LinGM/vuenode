<template>
  <!--<div class="hello">
    <button @click="showMe">点我</button>
    <ul>
      <li v-for="item in articleList" v-html="item.content"></li>
    </ul>
  </div>-->
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" @click="toggleCollapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <h2>HELLO,WORLD...</h2>
            <p>Nice to meet you...</p>
          </a>
        </div>
        <div class="navbar-collapse" id="bs-example-navbar-collapse-1" :class="{collapse:isShowNav}">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">首页</a></li>
            <li><a href="study.html">学无止境</a></li>
            <li><a href="thought.html">脑回路</a></li>
            <li data-toggle="tooltip" data-placement="bottom" title="建设中..."><a href="#">留言板</a></li>
            <li><a href="contact.html">联系我</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="content">
      <div class="banner"></div>
      <div class="main-content">
        <p class="motto">
          <span>学习就是一个你身处迷雾不断摸索的过程，有时候你想要的结果也许就在你触手可及的地方，只是你没找对方向。</span>
          <s></s><i></i>
          <b class="border-top"></b>
          <b class="border-right"></b>
          <b class="border-bottom"></b>
          <b class="border-left"></b>
        </p>
        <div class="avatar">
          <div class="flipper">
            <i class="front"></i>
            <i class="back"></i>
          </div>
        </div>
        <p class="nikename">@兜兜转转半生闲</p>
      </div>
    </div>
    <div class="foot">
      <a href="study.html">
        <h2>ARTICLE</h2>
        <p>......<i></i>......</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      articleList:[],
      isShowNav:true
    }
  },
  methods: {
    showMe: function() {
      var _this = this;
      this.$ajax.get('/api/login/getAccount')
        .then(function(response) {
          console.log(response);
          _this.articleList = response.data;
        })
        .catch(function(error) {
          console.log(error)
        });
    },
    toggleCollapse:function(){
      this.isShowNav = !this.isShowNav;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
