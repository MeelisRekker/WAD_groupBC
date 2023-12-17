<template>
  <div>
    <div class="form">
      <h2>Log in</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required />
          <p v-if="error" class="error-text">{{error}}</p>
        </div>
        <div class="buttons">
        <!-- type submit triggers the @submit.prevent above! -->
        <button type="submit">Log In</button>
        <button @click='this.$router.push("/signup")' class="center">Signup</button>
      </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LogIn',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      error: undefined,
    };
  },
  methods: {
    submitForm() {
      // code from Lab 13 frontend
      let data = {
        email: this.email,
        password: this.password
      };

      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if(data.error) {
          this.error = data.error;
        } else {
          this.$router.push("/");
        }
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

input {
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

button:disabled {
  background-color: rgb(192, 255, 192);
  cursor: not-allowed;
}

.error-text {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>

