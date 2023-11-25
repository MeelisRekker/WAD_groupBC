<template>
  <div class="home">
    <div class="sideBarVasak"></div>
    <Posts />
    <div class="sideBarParem"></div>
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

.sideBarVasak,
.sideBarParem {
  width: 22%;
  background-color: gray;
  border-radius: 5px;
  margin-top: 15px;
}
</style>