<template>
  <div class="posts">
    <!-- TODO jsonist võtta ja foreachiga lisada Post'ide sisu siia -->
    <div class="sideBarVasak"></div>
    <div v-for="post in users" :key="post.userId" class="postinfo">
      <router-link :to="{ name: 'Post',params:{id:post.userId}}">
          <h2>{{ post.postitus }}</h2>
      </router-link>
    </div>
    <div class="sideBarParem"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      users: []
    }
  },
  mounted(){
    fetch('http://localhost:3000/users')
      .then(res=>res.json())
      .then(data=>this.users=data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 2;
  justify-content: center;
}
</style>
