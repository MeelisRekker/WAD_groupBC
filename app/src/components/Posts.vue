<template>
  <div class="posts">
    <!-- TODO jsonist võtta ja foreachiga lisada Post'ide sisu siia -->
    <Post title="Postitus 1" likes="105" />
    <Post title="Postitus 2" likes="12" />
  </div>
</template>

<script>
import Post from './Post'

export default {
  name: 'Posts',
  components: {
    Post,
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
