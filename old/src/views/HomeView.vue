<template>
  <div class="home">
    <div class="sidebarLeft"></div>
    <Posts />
    <div class="sidebarRight"></div>
  </div>
</template>

<script>
import Posts from '../components/Posts.vue'

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
  background: linear-gradient(180deg, #582C2C 0%, #ffffff 100%);
}

.sidebarLeft, .sidebarRight {
  background-color: rgb(110, 106, 106);
  border-radius: 5px;
  margin-top: 15px;
  background: linear-gradient(180deg, #a12222f3 0%, #435b40f3 100%);
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
