<template>
  <div class="nav-bar-home-container">
    <IconHp :customWidth="50" :customHeight="50" />
    <div class="nav-bar-home-title"><span>HPD BIBLIOTHÈQUE</span></div>
    <div class="nav-bar-home-decoration">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="25"
        height="25"
        viewBox="0 0 37.5 37.499999"
        zoomAndPan="magnify"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="a2a02f6462">
            <path
              d="M 12.953125 0 L 24.054688 0 L 24.054688 11.101562 L 12.953125 11.101562 Z M 12.953125 0 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="1790e174ad">
            <path
              d="M 18.503906 0 C 15.4375 0 12.953125 2.484375 12.953125 5.550781 C 12.953125 8.617188 15.4375 11.101562 18.503906 11.101562 C 21.570312 11.101562 24.054688 8.617188 24.054688 5.550781 C 24.054688 2.484375 21.570312 0 18.503906 0 Z M 18.503906 0 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="0005ba75a0">
            <path
              d="M 12.953125 25.90625 L 24.054688 25.90625 L 24.054688 37.007812 L 12.953125 37.007812 Z M 12.953125 25.90625 "
              clip-rule="nonzero"
            />
          </clipPath>
          <clipPath id="44cf64be93">
            <path
              d="M 18.503906 25.90625 C 15.4375 25.90625 12.953125 28.390625 12.953125 31.457031 C 12.953125 34.519531 15.4375 37.007812 18.503906 37.007812 C 21.570312 37.007812 24.054688 34.519531 24.054688 31.457031 C 24.054688 28.390625 21.570312 25.90625 18.503906 25.90625 Z M 18.503906 25.90625 "
              clip-rule="nonzero"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#a2a02f6462)">
          <g clip-path="url(#1790e174ad)">
            <path
              fill="#ffffff"
              d="M 12.953125 0 L 24.054688 0 L 24.054688 11.101562 L 12.953125 11.101562 Z M 12.953125 0 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
        <g clip-path="url(#0005ba75a0)">
          <g clip-path="url(#44cf64be93)">
            <path
              fill="#ffffff"
              d="M 12.953125 25.90625 L 24.054688 25.90625 L 24.054688 37.007812 L 12.953125 37.007812 Z M 12.953125 25.90625 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconHp from "./icons/IconHp.vue";
import { storeToRefs } from "pinia";
import { useIconHpColorStore } from "@/stores/iconHpColorStore";

const { starColor, circleColor } = storeToRefs(useIconHpColorStore());

starColor.value = "#EEE";
circleColor.value = "#000";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

.nav-bar-home-container {
  display: flex;
  width: 200px;
  height: 50px;
  filter: drop-shadow(0 0 10px #01a5a5);
  transition: filter 0.5s;
}
.nav-bar-home-container:hover {
  filter: drop-shadow(0 0 20px #1bffff);
}

.nav-bar-home-container * {
  flex: 1;
}

.nav-bar-home-container .nav-bar-home-title span {
  text-wrap: nowrap;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 560;
  font-style: normal;
  color: #eeeeee;
  text-shadow: 0, 0, 25px, #01a5a5;
  transition: all 0.5s;
}

.nav-bar-home-container .nav-bar-home-decoration {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  filter: drop-shadow(0 0 10px #01a5a5);
}

</style>
