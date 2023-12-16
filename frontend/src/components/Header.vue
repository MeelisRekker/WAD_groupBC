<template>
    <header>
      <nav>
        <ul>
          <!-- Add your navigation links here -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    // Your header component logic goes here
  };
  </script>
  
  <style scoped>
  header {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #a12222f3;
    border-radius: 5px;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin: 0 10px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
  }
  </style>
  