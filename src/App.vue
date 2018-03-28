<template>
  <div id="app">
    <mheader></mheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--<footer></footer>-->
  </div>
</template>

<script>
import Mheader from './components/mheader/mheader'
import Footer from './components/footer/footer'
export default {
  components: {
    Mheader,
    Footer
  },
  name: 'App'
}
</script>

<style>
</style>
