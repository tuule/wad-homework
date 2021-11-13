<template>
  <body>

  <NavBar />
  <router-view />

  </body>

</template>

<script>
import NavBar from "./components/NavBar"
export default {
  name: "App",
  components: {
    NavBar
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

#nav {
  text-align: center;
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
