<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="postinfo">
      <Post :post="post" />
    </div>
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
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(err => console.error(err.message))
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  width: 50%;
  height: auto;
  margin-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
}
</style>
