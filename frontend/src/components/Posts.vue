<template>
  <div class="posts">
    <div class="topButtons">
      <button v-if="authResult" @click="logout" class="button">Logout</button>
    </div>
    <div v-if="posts === undefined"  class="loading">
      Loading posts ...
    </div>
    <div v-else v-for="post in posts" :key="post.id" class="postinfo">
      <PostRow :post="post" />
    </div>
    <div class="bottomButtons">
      <!-- 
        Router Link as button, example:
        https://stackoverflow.com/questions/45638239/enclosing-a-router-link-tag-in-a-button-in-vuejs
      -->
      <router-link
        to="/addpost"
        v-slot="{href, route, navigate}"
      >
        <button :href="href" @click="navigate" class='button'>
          {{ route.name }}
        </button>
    </router-link>
      <button @click="deletePosts" class="button">Delete All</button>
    </div>
  </div>
</template>

<script>

import auth from "../auth";
import PostRow from './PostRow.vue'

export default {
  components: {
    PostRow,
  },
  data(){
    return {
      posts: undefined,
      authResult: auth.authenticated(),
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/posts', {
      credentials: 'include', //  Don't forget to specify this if you need cookies
    })
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(err => console.error(err.message))
  },
  methods: {
    fetchPosts() {
      fetch('http://localhost:3000/api/posts', {
        credentials: 'include',
      })
      .then(res => res.json())
      .then(data => this.posts = data)
      .catch(err => console.error(err.message))
    },
    deletePosts() {
      fetch(`http://localhost:3000/api/posts`, {
        method: "DELETE",
        credentials: 'include'
      })
      .then((response) => {
          console.log(response.data);
          this.fetchPosts();
        })
      .catch((e) => {
        console.error(e);
      });
    },
    logout() {
      // Code from LAb 13 frontend
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
  },
}
</script>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  height: auto;
  margin-top: 15px;
  margin-left: 3%;
  margin-right: 3%;
  border-radius: 5px;
}

@media (max-width: 800px){
  .posts {
    width: 80%;
  }
}

@media (min-width: 801px){
  .posts {
    width: 40%;
  }
}

.loading {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

.topButtons {
  display: flex;
  justify-content: center;
}


.bottomButtons {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}

.button {
  border-radius: 8px;
  border: none;
  color: #fff;
  background-color: #435b40f3;
  padding: 10px 16px;
  cursor: pointer;
}

.button:hover {
  background-color: #87CEEB;
}
</style>
