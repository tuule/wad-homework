<!-- TEMPLATE -->
<template>
  <NavBar/>
  <router-view/> <!-- this is where the selected VIEW will be loaded -->
  <Footer/>
</template>

<!-- SCRIPT -->
<script>
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  }
}
</script>

<!-- STYLE -->
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>