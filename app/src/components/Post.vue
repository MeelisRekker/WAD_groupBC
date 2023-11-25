<template>
  <div v-if="post" class="post">
    <h4>Title: {{ post.postitus }}</h4>
    <p> username: {{ post.userName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    }
  },
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
