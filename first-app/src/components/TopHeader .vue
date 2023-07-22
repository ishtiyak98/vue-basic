<template>
  <div class="container">
    <div class="nav-inner">
      <h2>Ishtiyak</h2>
      <nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background-color: green;
  padding: 0px 120px;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0px;
}

.nav-inner>h2 {
  font-size: 32px;
  color: white;
}

.nav-inner>nav>.nav-link {
  color: white;
  text-decoration: none;
  margin: 0px 20px;
  font-size: 16px;
}
</style>