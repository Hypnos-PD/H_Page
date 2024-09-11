<template>
  <div class="flex flex-row items-center">
    <img src="../assets/img/hp_black.png" alt="HypnosPD_logo" />
    <div class="flex flex-col">
      <h2 class="udmincho text-lg text-gray-300 mb-4">
        此处是 <a class="footnote" href="https://hypd.asia">HypnosPD</a> 的个站。
      </h2>
      <p class="udmincho text-lg text-gray-300 mb-4">
        你可以访问 <a href="https://blog.hypd.asia">寐游 :: 文章</a> 来查看
        HypnosPD 的博客<br />
        或者也可以访问 <a href="https://nav.hypd.asia">寐游 :: 指路</a> 来查看
        HypnosPD 搭建的导航
      </p>
      <p class="udmincho text-lg text-gray-300 mb-4">
        欢迎来到 <text class="roman">þe librarie</text><br>
        总的来说，我希望你能在此地过的相对愉快。
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
img {
  width: 300px;
  max-width: 30vw;
}
a {
  color: #686868;
  transition: color 0.3s ease-in-out;
}
a:hover {
  color: #ffffff;
}
</style>
