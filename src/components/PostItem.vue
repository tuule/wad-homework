<template>
  <!-- beginning of a single post -->
  <div class="post" v-for="post in postData" :key="post.post_date">
    <div class="post-top">
      <img :src=post.author_avatar_url alt="avatar">
      <p>{{post.post_date}}</p>
    </div>
    <div class="post-image" v-if="post.post_image_url !== null">
      <img :src=post.post_image_url alt="posted-image">
    </div>
    <div class="post-comment" v-if="post.post_text !== null">
      <p>{{post.post_text}}</p>
    </div>
    <like-button />
  </div>
  <!-- end of a single post -->
</template>

<script>
import LikeButton from "./LikeButton"

export default {
  name: "PostItem",
  components: {
    LikeButton
  },
  computed: {
    postData() {
      return this.$store.getters.getPostData;
    }
  }
}
</script>

<style scoped>
.post {
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 10px #b5b4b4;
  margin: 0 auto 20px auto;
}

.post-top {
  height: 40px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.post-top img {
  height: 100%;
  border-radius: 50%;
}

img + .post-top p {
  font-size: 14px;
}

.post-top ~ .post-comment p {
  font-size: 18px;
}

.post .post-image img {
  width: 100%;
  padding-bottom: 15px;
}

.post-comment {
  padding: 0 15px 15px 15px;
}
</style>