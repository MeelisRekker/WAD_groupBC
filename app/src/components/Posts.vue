<template>
  <div class="posts">
    <div v-if="posts.length == 0" class="loading">
      Loading posts ...
    </div>
     <div v-for="post in posts" :key="post.id" class="postinfo">
      <Post :post="post" />
    </div>
    <button @click="resetLikes" class="resetButton">Reset Likes</button>
  </div>
</template>

<script>

import Post from './Post'

export default {
  components: {
    Post,
  },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    fetch('https://api.jsonbin.io/v3/b/65626fba0574da7622cbfab2')
      .then(res => res.json())
      .then(data => this.posts = data.record.posts)
      .catch(err => console.error(err.message))
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
      console.log('TODO');
      // Add your logic to reset likes here
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
