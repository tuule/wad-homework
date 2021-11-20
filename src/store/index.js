import { createStore } from "vuex";
import axios from "axios";


export default createStore({
  state: {
    postData: [],
    messages: []
  },
  actions: {
    getRemoteData({ commit }) {
      axios.get('http://myjson.dit.upm.es/api/bins/edr7')
          .then(response => {
            commit("setRemoteData", response.data)
          })
    },
    contactUs(context, message) {
      const newMessage = {
        messageName: message.name,
        messageEmail: message.email,
        messageSubject: message.subject,
        messageMessage: message.message
      };
      context.commit("addMessage", newMessage);
    }
  },
  getters: {
    getPostData(state) {
      return state.postData;
    }
  },
  mutations: {
    setRemoteData(state, posts) {
      state.postData = posts;
    },
    addLike: (state, post) => {
      const thePost = state.postData.find(x => {
        return x.post_id === post.post_id})
      thePost.number_of_likes += 1;
    },
    resetLikes: state => {
      state.postData.forEach(post => {
        post.number_of_likes = 0;
      })
    },
    addMessage(state, message) {
      state.messages.push(message);
    }
  }
});