<template>
    <main>
      <Posts/>
    </main>
</template>

<script>
import Posts from "../components/Posts";

export default {
  name: "Home",
  components: {
    Posts
  }
}

</script>

<style scoped>
main {
  margin-top: 70px;
}
</style>