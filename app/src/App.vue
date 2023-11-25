<template>
  <div>
    <Header />
    <Signup />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Signup from './components/signup.vue';

export default {
  components: {
    Header,
    Footer,
    Signup,
  }
};
</script>

<style scoped>
</style>
