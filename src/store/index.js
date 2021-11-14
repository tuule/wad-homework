import { createStore } from "vuex";

export default createStore({
  state: {
    postData: [
      {
        author_avatar_url: 'https://kodu.ut.ee/~a71486/user-1.png',
        post_date: '2021-10-17T14:41:22Z',
        post_image_url: 'https://kodu.ut.ee/~a71486/sample1.jpg',
        post_text: 'The Mountains are quite the grandest and most spectacular mountains I have ever seen. When viewed over the vast expanse of sagebrush which covers the valley, or with the river and the marshes in the foreground, they present a picture of ever-changing beauty which is beyond to compare.'
      },
      {
      author_avatar_url: 'https://kodu.ut.ee/~a71486/user-2.png',
      post_date: '2021-10-14T16:36:28Z',
      post_image_url: null,
      post_text: 'Wikipedia and Google answer questions with more questions, opening up pages of information you never asked for. But a dictionary builds on common knowledge, using simple words to explain more complex ones.'
      },
      {
      author_avatar_url: 'https://kodu.ut.ee/~a71486/user-2.png',
      post_date: '2021-10-05T17:14:14Z',
      post_image_url: 'https://kodu.ut.ee/~a71486/sample3.jpg',
      post_text: null
      }
    ]
  },
  getters: {
    getPostData(state) {
      return state.postData;
    }
  }
});
