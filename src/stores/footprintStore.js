import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useFootprintStore = defineStore('footprint', () => {
  const totalEmission = ref(0);
  const flightEmission = ref(0);
  const electricityEmission = ref(0);
  const transportEmission = ref(0);
  const petEmission = ref(0);
  const foodEmission = ref(0);
  const cookingGasEmission = ref(0);
  const username = ref("")

  return {totalEmission, flightEmission, electricityEmission, transportEmission, petEmission, foodEmission, cookingGasEmission, username}
})