import { createStore } from "vuex";

import localData from "../../hw-1-and-2/js/posts.json"

export default createStore({
  state: {
    postData: localData
  },
  getters: {
    getPostData(state) {
      return state.postData;
    },
    getPostId(state) {
      return state.postData.post_id;
    }
  },
  mutations: {
    addLike: (state, post) => {
      const thePost = state.postData.find(x => {
        return x.post_id === post.post_id})
      thePost.number_of_likes += 1;
    },
    resetLikes: state => {
      state.postData.forEach(post => {
        post.number_of_likes = 0;
      })
    }
  }
});
