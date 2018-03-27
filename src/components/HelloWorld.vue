<template>
  <div class="hello">
    <button @click="showMe">点我</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showMe: function() {
      // this.$http.get('/api/login/getAccount')
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .catch((reject) => {
      //     console.log(reject)
      //   });
      this.$ajax.get('/api/login/getAccount')
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error)
        });
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
