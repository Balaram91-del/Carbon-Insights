<script setup>

import q from "@/questions/questions.json"
import router from "@/router";
import { ref } from "vue";
import { useFootprintStore } from "@/stores/footprintStore";

const store = useFootprintStore();

const answers = ref({
  longFlights: null,
  shortFlights: null,
  gas: null,
  electricity: null,
  renewableEnergy: null,
  car: null,
  motorcycle: null,
  bus: null,
  metro: null,
  intercityTrain: null,
  dogs: null,
  cats: null,
  diet: '',
  chicken: '',
  redMeat: '',
  publicTransport: '',
  pets: ''
});


const currentIndex = ref(0)

// const getImage = (path) => new URL(path, import.meta.url).href

function nextIndex() {
  if (currentIndex.value < q.length - 1) {
    if ((currentIndex.value == 4) && (answers.value["publicTransport"] == "No")) {
      currentIndex.value = currentIndex.value + 3;
    }
    if ((currentIndex.value == 11) && (answers.value['diet'] == "Vegan")) {
      currentIndex.value = currentIndex.value + 3;
    }
    if ((currentIndex.value == 11) && (answers.value['diet'] == "Vegeterian")) {
      currentIndex.value = currentIndex.value + 2;
    }
    if ((currentIndex.value == 15) && (answers.value['pets'] == "No")) {
      currentIndex.value = currentIndex.value + 2;
    }
    currentIndex.value++;
    if (currentIndex.value >= q.length) {
      store.totalEmission = calculateCarbonFootprint();
      store.flightEmission = flightEmissionCalc();
      store.petEmission = petEmissionCalc();
      store.cookingGasEmission = cookingGasEmissionCalc();
      store.electricityEmission = electricityEmissionCalc();
      store.transportEmission = transportEmissionCalc();
      store.foodEmission = foodEmissionCalculator();

      router.push({name:'CarbonFootprintAnalysis'})
    }
  }
  else {
    store.totalEmission = calculateCarbonFootprint();
    store.flightEmission = flightEmissionCalc();
    store.petEmission = petEmissionCalc();
    store.cookingGasEmission = cookingGasEmissionCalc();
    store.electricityEmission = electricityEmissionCalc();
    store.transportEmission = transportEmissionCalc();
    store.foodEmission = foodEmissionCalculator();
      
    router.push({ name: 'CarbonFootprintAnalysis' })
    console.log(answers.value)
  }
}

function selectAnswers(value) {
  const currentName = q[currentIndex.value].name;
  answers.value[currentName] = value;
}

function flightEmissionCalc() {
  return (((answers.value["longFlights"] || 0) * 148 * 4000 +
          (answers.value['shortFlights'] || 0) * 246 * 1500) / 1000);
}

function petEmissionCalc() {
  return ((answers.value['dogs'] || 0) * 770/12 +
          (answers.value['cats'] || 0) * 310/12);
}

function cookingGasEmissionCalc() {
  return ((answers.value['gas'] || 0) * 2.8);
}

function electricityEmissionCalc() {
  return ((answers.value['electricity'] || 0) -
          (answers.value['renewableEnergy'] || 0)) * 0.82;
}

function transportEmissionCalc() {
  return ((((answers.value['car'] || 0) * 170 +
           (answers.value['motorcycle'] || 0) * 114 +
           (answers.value['bus'] || 0) * 97 +
           (answers.value['metro'] || 0) * 28 +
           (answers.value['intercityTrain'] || 0) * 35) * 4) / 1000);
}


function foodEmissionCalculator() {
  let dietEmission = 0;  
  if (answers.value['diet'] == 'Vegan') {
    dietEmission = 3 * 30;
  }
  if (answers.value['diet'] == 'Vegeterian') {
    dietEmission = 4 * 30;
  }
  if (answers.value['chicken'] == 'low' || answers.value['redMeat'] == 'low') {
    dietEmission = 4.67 * 30; 
  }
  if (answers.value['chicken'] == 'average' || answers.value['redMeat'] == 'average') {
    dietEmission = 5.93 * 30; 
  }
  if (answers.value['chicken'] == 'high' || answers.value['redMeat'] == 'high') {
    dietEmission = 7 * 30; 
  }

  return dietEmission;

}

function calculateCarbonFootprint() {
  return flightEmissionCalc() + petEmissionCalc() + foodEmissionCalculator() + transportEmissionCalc() + cookingGasEmissionCalc() + electricityEmissionCalc();
}

</script>

<template>
  <main>
    <!-- <header>Lets calculate your carbon footprint by answering some simple questions</header> -->
    <div class="card">
      <div class="image-container">
        <img :src="q[currentIndex].img" alt="" width="100px">
      </div>
      <div class="question-container">
        <h1>{{ q[currentIndex].label }}</h1>
        <p>{{ q[currentIndex].text }}</p>
        <button v-for="option in q[currentIndex].options" @click="selectAnswers(option.label3); nextIndex()">
          <p>{{ option.label1 }}</p>
          <p>{{ option.label2 }}</p>
        </button>
        <input type="text" placeholder="Custom" v-model="answers[q[currentIndex].name]">
        <div class="btn-holder">
          <button><i class="ri-arrow-left-fill"></i></button>
          <button @click="nextIndex()"><i class="ri-arrow-right-fill"></i></button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

/* header{
  font-family: 'Oswald';
  margin-bottom: 100px;
  left: 0;
  top: 0;
} */

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: white;
}

.carbonfootprint-heading{
  height: 20px;
}
.card{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: 50%;
  width: 60%;
}

.imgage-container{
  display: flex;
  width: 30%;
  top: 0;
  height: 100%;
}

.imgage-container img{
  margin-right: 40px;
}

.question-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.question-container h1{
  font-family: 'Oswald';
  margin: 0;
}

.question-container p{
  font-family: "Raleway";
  font-size: 1.2rem;
}

button{
  display: flex;
  border: none;
  color: white;
  /* background-color: transparent;
  backdrop-filter: blur(20px);
  background-image: linear-gradient(
      120deg,
      rgba(67, 132, 78, 0.5),
      #113a15
    );
  /* background-size: 30px; */
  /* border-radius: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  width: 100%;
  justify-content: space-evenly;
  margin-top: 20px;
  cursor: pointer; */

  background: #4d9559;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 1.2rem;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
  cursor: pointer;
}

input{
  display: flex;
  width: 100%;
  background: #4d9559;
  border: none;
  font-size: 1.2rem;
  margin-top: 20px;
  border-radius: 30px;
  padding: 23px 0px;
  justify-content: space-between;
  font-family: 'Raleway';
  color: white;
}

input::placeholder{
  color: white;
}

button:hover, input:hover{
  background: transparent;
  border: solid #4d9559 3px;
  color: white;
}

.btn-holder{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 20%;
}

.btn-holder button{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  /* background-color: #4d9559; */
}
</style>