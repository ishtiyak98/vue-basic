<template>
  <div class="container">
    <v-btn prepend-icon="$vuetify" variant="tonal" class="mb-5">
      Button
    </v-btn>


    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="12" lg="4" md="6" sm="4">
          <v-sheet class="ma-2 pa-2">
            One of three columns
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 50px auto;
}
</style>