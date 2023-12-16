<template>
  <div class="form">
    <h2>Edit Post</h2>
    <form @submit.prevent="updatePost">
      <div class="form-group">
        <label for="body">Body: </label>
        <textarea name="body" id="body" rows="4" required v-model="post.body" />
      </div>
      <div class="buttons">
        <!-- type submit triggers the @submit.prevent above! -->
        <button type="submit" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>
    </form>
  </div>
</template>


<script>
// Code Example taken from Lab 12 frontend project
export default {
  name: "PostView",
  data() {
    return {
      post: {
        id: "",
        body: "",
      },
    };
  },
  methods: {
    fetchPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          //this.$router.push("/apost/" + this.post.id);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        })
        .catch((e) => {
          console.error(e);
        });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/");
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
    // position in the URL. The captured values are populated in the req.params object, with the name 
    // of the route parameter specified in the path as their respective keys
    this.fetchPost(this.$route.params.id);
  },
};
</script>

<style scoped>
.form {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  margin-right: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}
  
button {
  padding: 10px;
  background-color: #435b40f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>