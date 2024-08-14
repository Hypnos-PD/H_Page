<template>
  <div class="nav-bar">
    <RouterLink to="/">
    <NavBarHome />
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import NavBarHome from './NavBarHome.vue';
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0 10px 20px #000000;
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    transition: filter 0.5s;
    z-index: 1;
  }
  .nav-bar >:hover {
    filter: drop-shadow(0 0 20px #1bffff57);
  }
  a{
    text-decoration: none;
  }
</style>
