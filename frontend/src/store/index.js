import { createStore } from 'vuex'

// example: https://stackoverflow.com/questions/59932085/use-fetch-method-inside-vuex-action

export default createStore({
  state: {
    posts: []
  },
  getters: {
  },
  mutations: {
    /*
    addLike(state, postId) {
      const post = state.posts.find(post => post.id == postId);
      post.likes = post.likes + 1;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      })
    }
    */
  },
  actions: {
    /*
    fetchPosts({ commit }) {
      console.log('fetching posts')
     // Local JSON
      fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(posts => commit("setPosts", posts))
      .catch(err => console.error(err.message))
      
     // return fetch('https://api.jsonbin.io/v3/b/65626fba0574da7622cbfab2')
     //   .then(res => res.json())
     //   .then(data => commit("setPosts", data.record.posts))
     //  .catch(err => console.error(err.message));
    }
    */
  },
  modules: {
  },
})
