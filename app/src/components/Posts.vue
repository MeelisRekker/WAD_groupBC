<template>
  <div class="posts">
    <div v-if="posts.length == 0"  class="loading">
      Loading posts ...
    </div>
     <div v-else v-for="post in posts" :key="post.id" class="postinfo">
      <Post :post="post" />
    </div>
    <button @click="resetLikes" class="resetButton">Reset Likes</button>
  </div>
</template>

<script>

import Post from './Post.vue'

export default {
  components: {
    Post,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
    /*
    // Local JSON
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(err => console.error(err.message))
    */
  },
  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  height: auto;
  margin-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
}

@media (max-width: 800px){
  .posts {
    width: 80%;
  }
}

@media (min-width: 801px){
  .posts {
    width: 40%;
  }
}

.loading {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.resetButton {
  border-radius: 8px;
  border: none;
  color: #fff;
  background-color: #435b40f3;
  padding: 10px 16px;
  margin-left: 20%;
  margin-right: 20%;
  cursor: pointer;
}

.resetButton:hover {
  background-color: #87CEEB;
}
</style>
