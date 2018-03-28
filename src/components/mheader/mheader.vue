<template>
  <div class="header">
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
            <!--<li><a href="/article">学无止境</a></li>-->
            <router-link tag="li" to="/article">学无止境</router-link>
            <li><a href="thought.html">脑回路</a></li>
            <li data-toggle="tooltip" data-placement="bottom" title="建设中..."><a href="#">留言板</a></li>
            <li><a href="contact.html">联系我</a></li>
          </ul>
        </div>
      </div>
    </nav>     
  </div>

</template>

<script>
export default {
    data(){
        return{
            isShowNav:false
        }
    },
    methods:{
        toggleCollapse:function(){
            this.isShowNav = !this.isShowNav
        }
    }
}
</script>

<style>

</style>
