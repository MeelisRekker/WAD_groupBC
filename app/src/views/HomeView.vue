<template>
  <div class="home">
    <div class="sidebarLeft"></div>
    <Posts />
    <div class="sidebarRight"></div>
  </div>
</template>

<script>
import Posts from '../components/Posts'

export default {
  name: 'HomeView',
  components: {
    Posts
  }
}
</script>

<style scoped>
.home {
  display: flex;
}

.sidebarLeft,
.sidebarRight {
  width: 22%;
  background-color: gray;
  border-radius: 5px;
  margin-top: 15px;
}
</style>