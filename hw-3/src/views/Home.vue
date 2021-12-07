<!-- TEMPLATE -->
<template>
    <main>
      <Posts/>
    </main>
</template>

<!-- SCRIPT -->
<script>
import Posts from "../components/Posts";

export default {
  name: "Home",
  components: {
    Posts
  }
}
</script>

<!-- STYLE -->
<style scoped>
main {
  margin-top: 70px;
}
</style>