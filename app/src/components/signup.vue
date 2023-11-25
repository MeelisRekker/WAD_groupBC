<template>
    <div>
      <div class="signup-form">
        <h2>Sign Up</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" @input="checkPassword" required />
            <p v-if="!isPasswordValid" class="error-text">Password is not valid. Please follow the conditions.</p>
          </div>
          <button type="submit" :disabled="!isPasswordValid" @click="submitForm">Sign Up</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'Signup',
    components: {},
    data() {
      return {
        email: '',
        password: '',
        isPasswordValid: true,
      };
    },
    methods: {
      checkPassword() {
        const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z][a-zA-Z0-9_]{7,14}$/;
        // const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;
        // const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z][a-zA-Z0-9_]{6,13}$/;
        this.isPasswordValid = regex.test(this.password);
      },
      submitForm() {
      // Your form submission logic goes here

      // Redirect to index.html
      this.$router.push('/');
    },
    },
  };
  </script>
  
  <style scoped>
  .signup-form {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
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
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .error-text {
    color: red;
    font-size: 14px;
    margin-top: 5px;
  }
  </style>
  