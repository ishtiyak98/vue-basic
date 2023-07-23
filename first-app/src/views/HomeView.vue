<template>
  <main class="container">
    <h1>Hello</h1>
    <PrimaryBtn title="Submit Form" sub="ttt"></PrimaryBtn>
  </main>
</template>


<script>
import PrimaryBtn from '../components/PrimaryBtn.vue';

export default {
  name: "HomeView",
  components: {
    PrimaryBtn
  }
}

</script>


<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>