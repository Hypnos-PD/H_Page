<script setup lang="ts">


import HomepageNav from './components/HomepageNav.vue';
import PageContent from "./components/PageContent.vue";

</script>

<template>
<HomepageNav/>
<div id="page-content-container">
<PageContent/>
</div>
</template>

<style scoped>
#page-content-container {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw;
}




</style>
