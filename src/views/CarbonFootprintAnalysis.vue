<script setup>
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import { useFootprintStore } from '@/stores/footprintStore';
import { askGemini } from '@/services/geminiResponse';

const store = useFootprintStore();

const carbonFootprint = (store.totalEmission / 1000).toFixed(2);

const distanceCarNeedsToDrive = (carbonFootprint * 1000 * 1000 / 170).toFixed(2);

const userEmissionData = {
  totalEmission: store.totalEmission,
  flightEmission: store.flightEmission,
  petEmission: store.petEmission,
  cookingGasEmission: store.cookingGasEmission,
  electricityEmission: store.electricityEmission,
  transportEmission: store.transportEmission,
  foodEmission: store.foodEmission
}

const aiSuggestion = await askGemini(`
  Here is the emission data of an individual in a month in kg:
  ${JSON.stringify(userEmissionData, null, 2)}
  Give very very concise suggestions on how they can reduce their carbon footprint.
  Format the output ONLY as clean bullet points like:
  - Suggestion 1\n
  - Suggestion 2\n  
`);

const formattedSuggestion = aiSuggestion.replace(/-\+/g, "n-").trim();
</script>

<template>
  <Suspense>
    <template #default>
      <div class="container">
        <div class="carbon-footprint-container">
          <h1>Your carbon footprint is <br>
          <strong>{{ carbonFootprint }}</strong> tons <br> this month
          </h1>
          <h3>It is equivalent to driving a petrol car
          <strong>{{ distanceCarNeedsToDrive }}</strong> kms
          </h3>
        </div>

        <div class="graph-container">
          <div class="bar-chart"><BarChart /></div>
          <div class="donought-chart"><PieChart /></div>
        </div>

        <div class="ai-suggestion">
          <h2>Suggestions on how to reduce your carbon footprint</h2>
          <p>{{ formattedSuggestion }}</p>
        </div>

        <div class="offset-container">
          <h1>Would you like to offset your carbon footprint?</h1>
          <a href="https://unfccc.int/climate-action/united-nations-carbon-offset-platform">Proceed</a>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    </template>
  </Suspense>
</template>


<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.carbon-footprint-container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   border: none;
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
}

.carbon-footprint-container h1{
  text-align: center;
  color: white;
  font-family: 'Oswald';
}

.carbon-footprint-container h3{
  color: white;
  font-family: 'Raleway';
  margin-top: 0;
}

.graph-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.bar-chart{
  width: 60%;
}

.donought-chart{
  width: 40%;
}

.ai-suggestion{
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
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
}

.ai-suggestion h2{
  color: #FD4520;
  font-family: 'Oswald';
  margin-top: 0;
}

.ai-suggestion p{
  color: white;
  font-family: 'Raleway';
  margin-top: 0;
}

.offset-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 20px;
}

.offset-container h1, .asking-login h2{
  text-align: center;
  color: white;
  font-family: 'Oswald';
}

.offset-container a, .asking-login a{
  text-decoration: none;
  padding: 10px;
  background-color: #FD4520;
  color: white;
  font-family: 'Raleway';
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.offset-container a:hover{
  background-color: transparent;
  border: white solid 2px;
}

.asking-login{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.loader-container{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Raleway';
}

.loader {    
  --r1: 154%;
  --r2: 68.5%;
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%; 
  background:
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#FD4520 80%),
    radial-gradient(var(--r1) var(--r2) at bottom,#FD4520 79.5%,#0000 80%),
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%,#FD4520 80%),
    #ccc;
  background-size: 50.5% 220%;
  background-position: -100% 0%,0% 0%,100% 0%;
  background-repeat:no-repeat;
  animation: l9 2s infinite linear;
}
@keyframes l9 {
    33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
    66%  {background-position: -100%  66%,0%   66% ,100% 66% }
    100% {background-position:    0% 100%,100% 100%,200% 100%}
}

footer{
  height: 40vh;
}





</style>