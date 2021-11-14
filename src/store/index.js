import { createStore } from "vuex";

import localData from "../../hw-1-and-2/js/posts.json"

export default createStore({
  state: {
    postData: localData
  },
  getters: {
    getPostData(state) {
      return state.postData;
    }
  }
});
