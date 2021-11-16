<template>
  <body>

  <NavBar />
  <router-view /> <!-- this is where the selected component will be loaded -->
  <Footer />
  </body>

</template>

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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

body {
  height: 100vh;
  margin: 0;
  background-color: #156fb0;
}
</style>
