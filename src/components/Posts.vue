<template>
  <section id="content">
    <!-- beginning of content -->
    <div id="content-flow">
      <PostItem />
      <reset-button />
    </div>
  </section>

</template>

<script>
import PostItem from "./PostItem";
import ResetButton from "./ResetButton"
export default {
  name: "Posts",
  components: {
    PostItem,
    ResetButton
  }
}
</script>

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