<template>
  <div id="homeview-container">
    <div id="mainview-img-main-container">
      <img id="mainview-img" src="../assets/hypnos_circle.png" alt="hp" />
      <div id="mainview-img-shadow"></div>
    </div>
    <div id="mainview-text-main-container">
      <div id="mainview-text-id">
        <span class="main" id="mainview-text-id-1">Hypnos</span>
        <span class="main" id="mainview-text-id-2">P.</span>
        <span class="main" id="mainview-text-id-3">D.</span>
        <span class="sub">Paradise</span>
      </div>
      <div id="mainview-text-subid">
        <span class="main" id="mainview-text-subid-1">寐魚</span>
        <span class="main" id="mainview-text-subid-2">游宮</span>
      </div>
      <div id="mainview-text-slogan">
        <span class="main">Gehealden mín inwit, gehealdan Hyht.</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@font-face {
  font-family: "latinmodernroman10regular";
  src: url(../assets/latinmodernroman10regular.woff);
}

@keyframes scale_up {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes wave {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  25% {
    transform: scale(0.5);
    opacity: 0;
  }
  62.5% {
    transform: scale(1);
    opacity: 0.2;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}
@keyframes flyIn {
  0% {
    opacity: 0;
    transform: translateX(50vw);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
*::selection {
  background-color: white;
  color: black;
}
#homeview-container {
  background-color: black;
  min-height: calc(100vh - 80px);
}
#mainview-img-main-container {
  position: absolute;
  top: calc(50% - 277px);
  left: calc(30% - 138px);
}
#mainview-img {
  position: absolute;
  z-index: 1;
  width: 277px;
  height: 277px;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px #ffffffd2);
  animation: scale_up 0.2s ease-in-out forwards;
  transition: transform 0.2s ease-in-out;
}
#mainview-img-shadow {
  position: absolute;
  z-index: 0;
  top: -112.5px;
  left: -112.5px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  box-shadow: inset 0 0 100px #ffffffd2;
  background-color: #ffffff00;
  animation: wave 0.8s ease-in-out forwards;
}
#mainview-text-main-container {
  position: absolute;
  top: calc(50% - 250px);
  left: calc(30% + 168px);
  width: calc(40vw);
}
#mainview-text-id {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(40vw);
}
#mainview-text-id > span.main {
  font-family: "Montserrat", sans-serif;
  font-weight: 20;
  font-size: 48px;
  color: white;
  transition: all 0.2s ease-in;
  animation: flyIn 0.75s ease-out forwards;
}
#mainview-text-id-1 {
  position: absolute;
}
#mainview-text-id-2 {
  position: absolute;
  top: 0;
  left: 210px;
}
#mainview-text-id-3 {
  position: absolute;
  top: 0;
  left: 280px;
}
#mainview-text-main-container:hover > #mainview-text-id > span.main {
  font-weight: 500;
}
#mainview-text-id > span.sub {
  font-family: "Montserrat", sans-serif;
  font-weight: 10;
  font-size: 24px;
  color: rgba(255, 255, 255, 0);
  position: absolute;
  top: -10px;
  left: 185px;
  transition: all 0.2s ease-in-out;
}
#mainview-text-main-container:hover > #mainview-text-id > span.sub {
  top: -35px;
  left: 185px;
  color: white;
}
#mainview-text-subid {
  position: absolute;
  top: 60px;
  left: 0;
  width: calc(40vw);
}
#mainview-text-subid > span.main {
  font-family: "Yu Gothic", sans-serif;
  font-weight: 10;
  font-size: 24px;
  color: white;
  animation: flyIn 0.70s ease-out forwards;
}
#mainview-text-subid-1 {
  position: absolute;
  top: 0;
  left: 75px;
  transition: all 0.2s ease-in-out;
}
#mainview-text-main-container:hover
  > #mainview-text-subid
  > #mainview-text-subid-1 {
  left: 75px;
  font-size: 50px;
}
#mainview-text-subid-2 {
  position: absolute;
  top: 0;
  left: 210px;
  transition: all 0.2s ease-in-out;
}
#mainview-text-main-container:hover
  > #mainview-text-subid
  > #mainview-text-subid-2 {
  left: 175px;
  font-size: 50px;
}
#mainview-text-slogan {
  position: absolute;
  top: 160px;
  left: 0;
  width: calc(40vw);
}
#mainview-text-slogan > span.main {
  font-family: "latinmodernroman10regular", sans-serif;
  font-weight: 100;
  font-size: 36px;
  color: white;
}
</style>
