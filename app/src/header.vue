<template>
    <header>
      <nav>
        <ul>
          <!-- Add your navigation links here -->
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
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
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    display: inline-block;
    margin-right: 10px;
  }
  
  nav a {
    text-decoration: none;
    color: #fff;
  }
  </style>
  