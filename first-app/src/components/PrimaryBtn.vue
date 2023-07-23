<template>
  <div @click="onclick()" class="btn primary-btn">
    {{ title + " " + sub + " " + firstNumber }}
  </div>
</template>

<script>
export default {
  name: "PrimaryBtn",
  props: ["title", "sub"],
  data() {
    return {
      firstNumber: 1,
    }
  },
  methods: {
    onclick() {
      console.log("clicked");
    }
  }
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
}

.primary-btn {
  background-color: blue;
  color: white;
}
</style>