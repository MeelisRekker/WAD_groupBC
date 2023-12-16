<template>
  <div class="form">
    <h2>Add a Post</h2>
    <form @submit.prevent="addPost">
      <div class="form-group">
        <label for="body">Body: </label>
        <textarea name="body" id="body" rows="4" required v-model="post.body" />
      </div>
      <!-- type submit triggers the @submit.prevent above! -->
      <button type="submit">Add post</button>
    </form>
  </div>
</template>

<script>
// Code Example taken from Lab 12 frontend project
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        body: this.post.body,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => {
        console.log(response.data);
        // redirect to /home view
        this.$router.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
    },
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
  
button {
  padding: 10px;
  background-color: #435b40f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>