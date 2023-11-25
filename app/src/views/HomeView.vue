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

.sidebarLeft, .sidebarRight {
  background-color: gray;
  border-radius: 5px;
  margin-top: 15px;
}

@media (max-width: 800px){
  .sidebarLeft, .sidebarRight {
    width: 10%;
  }
}

@media (min-width: 801px){
  .sidebarLeft, .sidebarRight {
    width: 27%;
  }
}

</style>