<template>
  <div class="posts">
    <div v-for="post in users" :key="post.userId" class="postinfo">
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
  data(){
    return{
      users: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/users')
      .then(res=>res.json())
      .then(data=>this.users=data)
      .catch(err => console.error(err.message))
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 2;
  justify-content: center;

  background-color: rgb(27, 61, 58);
  width: 50%;
  height: auto;
  margin-top: 10px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
}
</style>
