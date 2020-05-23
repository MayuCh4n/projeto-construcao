<template>
  <div id="app">
    <menu-vue></menu-vue>
    <router-view/>
   <div> 
    <footer-vue></footer-vue>
   </div>
  </div>
</template>

<script>
import menuVue from "./components/menu/Menu.vue"
import footerVue from "./components/footer/Footer.vue"

export default {
  name: 'app',
  components: {
    menuVue,
    footerVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #243d57;
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
