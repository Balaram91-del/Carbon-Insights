<script setup>
import { ref } from 'vue';

const carbonPoints = ref(0)
const monthlyCarbonFootprint = ref(0)
const anualCarbonFootprint = ref(0)
const overallCarbonFootprint = ref(0)
</script>

<!-- <template>
  <main>
    <div class="rewards-container">
      <div class="carbon-points-container">
        <img width="64" height="64" src="https://img.icons8.com/arcade/64/coins--v2.png" alt="coins--v2"/>
        <h2>{{ carbonPoints }}</h2>
      </div>
    </div>
    <div class="carbon-footprint-container">
      <div class="carbon-footprint-card">
        <h2>Monthly Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
      <div class="carbon-footprint-card">
        <h2>Anual Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
      <div class="carbon-footprint-card">
        <h2>Overall Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: start; */
  width: 100%;
  height: auto
}

.rewards-container{
  width: 100%;
  display: flex;
  justify-content: end;
}

/* .carbon-points-container{
  width: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
} */

.carbon-points-container h2{
  color: white;
  font-family: 'Oswald';
}

.carbon-footprint-container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
}

.carbon-footprint-card{
  width: 300px;
  background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      rgba(67, 132, 78, 0.5),
      #113a15
    );
    background-size: 0 30px;
    border-radius: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 20px;
}

.carbon-footprint-card h2{
  color: white;
  font-family: 'Raleway';
  font-weight: bold;
}

.carbon-footprint-card h3{
  color: #FD4520;
  font-family: 'Raleway';
  font-size: 1.5rem;
}


</style> -->

<template>
  <div class="container">
    <div class="rewards-container">
      <div class="carbon-points-container">
        <img width="64" height="64" src="https://img.icons8.com/arcade/64/coins--v2.png" alt="coins--v2"/>
        <h2>{{ carbonPoints }}</h2>
      </div>
    </div>
    <div class="carbon-footprint-container">
      <div class="carbon-footprint-card">
        <h2>Monthly Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
      <div class="carbon-footprint-card">
        <h2>Anual Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
      <div class="carbon-footprint-card">
        <h2>Overall Carbon Footprint</h2>
        <h3>{{ monthlyCarbonFootprint }} Tons</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
}

.rewards-container{
  width: 100%;
  display: flex;
  justify-content: end;
}

.carbon-points-container{
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: space-around;
  align-items: center;
}

.carbon-points-container h2{
  font-family: 'Oswald';
  color: white
}

.carbon-footprint-container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;
}

.carbon-footprint-card{
  width: 300px;
  background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      rgba(67, 132, 78, 0.5),
      #113a15
    );
    background-size: 0 30px;
    border-radius: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 20px;
}

.carbon-footprint-card h2{
  color: white;
  font-family: 'Raleway';
  font-weight: bold;
}

.carbon-footprint-card h3{
  color: #FD4520;
  font-family: 'Raleway';
  font-size: 1.5rem;
}
</style>