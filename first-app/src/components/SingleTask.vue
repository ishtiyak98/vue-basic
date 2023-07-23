<template>
  <div class="container">
    <div :class="[task.reminder && 'task-reminder', 'task']">
      <div>
        <h3>{{ task.text }}</h3>
        <p>{{ task.day }}</p>
      </div>
      <div>
        <i @click="taskDelete(task.id)" class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleTask",
  props: ["task"],
  methods: {
    taskDelete(id) {
      console.log(id);
      this.$emit("delete-task", id)
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 580px;
  margin: 10px auto;
}

.task {
  padding: 10px;
  background-color: lightgray;
  font-family: sans-serif;
  margin-bottom: 10px;
  border-bottom: 5px solid lightgray;
  display: flex;
  justify-content: space-between;
}

.task-reminder {
  border-bottom: 5px solid green;
}

.task h3 {
  margin-bottom: 5px;
}

.task i {
  font-size: 22px;
}

.task i:hover {
  color: red;
  cursor: pointer;
}
</style>