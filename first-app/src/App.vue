<script setup>
import { RouterView } from 'vue-router';
import TopHeader from './components/TopHeader .vue';
</script>

<template>
  <div>
    <TopHeader></TopHeader>
    <RouterView />
  </div>
</template>

<style scoped></style>
