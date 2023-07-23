<template>
  <div>
    <TopHeader></TopHeader>
    <Tasks @delete-task="deleteTask" :tasks="tasks"></Tasks>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import TopHeader from './components/TopHeader .vue'
import Tasks from './components/Tasks.vue'

export default {
  name: "App",
  components: {
    TopHeader,
    RouterView,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    }
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true
      },
      {
        id: 2,
        text: "Meeting atOffice",
        day: "March 5th at 8:30pm",
        reminder: false
      },
      {
        id: 3,
        text: "Food Shopping",
        day: "April 2nd 1st at 4:30pm",
        reminder: true
      },
      {
        id: 4,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: true
      },
      {
        id: 5,
        text: "Doctors Appointment",
        day: "March 1st at 2:30pm",
        reminder: false
      }
    ]
  }
}

</script>

<style scoped></style>
