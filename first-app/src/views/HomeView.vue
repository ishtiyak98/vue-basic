<template>
  <main class="container">
    <h1>Hello</h1>
    <PrimaryBtn title="Submit Form" sub="ttt"></PrimaryBtn>
    <div>
      <h1 v-for="task in tasks" :key="task.id">{{ task.title }}</h1>
    </div>
  </main>
</template>


<script>
import axios from 'axios';
import PrimaryBtn from '../components/PrimaryBtn.vue';

export default {
  name: "HomeView",
  components: {
    PrimaryBtn
  },
  data() {
    return {
      tasks: []
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/todos/")
      .then(res => {
        this.tasks = [...res.data];
        console.log(this.tasks);
      })
  }
}

</script>


<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>