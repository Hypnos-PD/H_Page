<template>
  <div id="page-content-inner-container">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from "vue-router";
</script>

<style scoped>
#page-content-inner-container {
  position: absolute;
  width: 100%;
}
</style>