<!-- TEMPLATE -->
<template>
  <section id="content">
    <!-- beginning of content -->
    <div id="content-flow">
      <PostItem/>
      <ResetButton v-on:click="resetLikesAll"/>
    </div>
  </section>
</template>

<!-- SCRIPT -->
<script>
import PostItem from "./PostItem";
import ResetButton from "./ResetButton"

export default {
  name: "Posts",
  components: {
    PostItem,
    ResetButton
  },
  methods: {
    resetLikesAll() {
      this.$store.commit("resetLikes")
    }
  }
}
</script>

<!-- STYLE -->
<style scoped>
#content {
  display: flex;
  flex-direction: column;
  width: 65%;
  min-height: calc(100vh - 70px);
  margin: auto;
  background-color: #ffffff;
}

#content #content-flow {
  padding: 40px 0 20px 0;
}
</style>