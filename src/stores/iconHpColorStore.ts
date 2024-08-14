import { defineStore } from "pinia";
import { ref } from "vue";

export const useIconHpColorStore = defineStore("iconHpColor", () => {
  const starColor = ref("white");
  const circleColor = ref("black");
  return {
    starColor,
    circleColor,
  };
});
