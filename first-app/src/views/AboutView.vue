<template>
  <div class="container">
    <h2>About Page</h2>

    <div class="name-list" v-if="!$store.state.loadState">
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
      </ul>

      <ul>
        <li v-for="user in getUsers" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>

    <div class="loader">
      <h1 v-if="$store.state.loadState">Loading....</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "AboutView",
  mounted() {
    // this.$store.dispatch("fetchUsers");
    this.fetchUsers();
  },
  computed: {
    ...mapGetters({
      getUsers: 'getUsers'
    }),
    ...mapState(['users'])
  },
  methods: {
    ...mapActions({
      fetchUsers: 'fetchUsers'
    }),
  }
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}

.name-list {
  margin-top: 20px;
}

.loader {
  text-align: center;
}

.name-list ul {
  margin: 25px 0px;
}

.name-list li {
  font-size: 26px;
}
</style>