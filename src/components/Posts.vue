<template>
  <section id="content">
    <!-- beginning of content -->
    <div id="content-flow">
      <PostItem :post="post1" />
      <PostItem :post="post2" />
      <PostItem :post="post3" />
    </div>
  </section>

</template>

<script>
import PostItem from "./PostItem";
export default {
  name: "Posts",
  components: {
    PostItem
  },
  data() {
    return {
      post1: {
        author_avatar_url: 'https://kodu.ut.ee/~a71486/user-1.png',
        post_date: '2021-10-17T14:41:22Z',
        post_image_url: 'https://kodu.ut.ee/~a71486/sample1.jpg',
        post_text: 'The Mountains are quite the grandest and most spectacular mountains I have ever seen. When viewed over the vast expanse of sagebrush which covers the valley, or with the river and the marshes in the foreground, they present a picture of ever-changing beauty which is beyond to compare.'
      },
      post2: {
        author_avatar_url: 'https://kodu.ut.ee/~a71486/user-2.png',
        post_date: '2021-10-14T16:36:28Z',
        post_image_url: null,
        post_text: 'Wikipedia and Google answer questions with more questions, opening up pages of information you never asked for. But a dictionary builds on common knowledge, using simple words to explain more complex ones.'
      },
      post3: {
        author_avatar_url: 'https://kodu.ut.ee/~a71486/user-2.png',
        post_date: '2021-10-05T17:14:14Z',
        post_image_url: 'https://kodu.ut.ee/~a71486/sample3.jpg',
        post_text: null
      }
    }
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