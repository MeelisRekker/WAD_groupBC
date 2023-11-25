<template>
  <div class="post">
    <h3>Title: {{ title }} </h3>
    <p> Likes: {{ likes }}</p>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    title: String,
    likes: Number
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
