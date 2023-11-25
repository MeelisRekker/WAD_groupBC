<template>
  <div v-if="post">
    <div class="post">
      <h1>Title: {{ post.postitus }} </h1>
      <p> Likes: {{ post.userName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data(){
    return{
      post: null
    }
  },
  mounted(){
    fetch('http://localhost:3000/users/'+this.id)
      .then(res => res.json())
      .then(data => this.post = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 30px;
  background-color: #f5f5f5;
}
</style>
