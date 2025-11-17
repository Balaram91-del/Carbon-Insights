<script setup>
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import { useFootprintStore } from '@/stores/footprintStore';

const store = useFootprintStore();

const carbonFootprint = (store.totalEmission / 1000).toFixed(2);

const distanceCarNeedsToDrive = (carbonFootprint * 1000 * 1000 / 170).toFixed(2);
</script>

<template>
  <div class="container">
    <div class="carbon-footprint-container">
      <h1>Your carbon footprint is <br> <strong>{{ carbonFootprint }}</strong> tons <br>this month</h1>
      <h3>It is equivalent to driving a petrol car <strong>{{ distanceCarNeedsToDrive }}</strong> kms </h3>
    </div>
    <div class="graph-container">
      <div class="bar-chart"><BarChart /></div>
      <div class="donought-chart"><PieChart /></div>
    </div>
    <div class="offset-container">
      <h1>Would you like to offset your carbon footprint ?</h1>
      <a href="#">Proceed</a>
    </div>
    <!-- <div class="asking-login">
      <h2>Like to keep track of your Carbon Footprint Data ? <router-link >Login</router-link></h2>
    </div> -->
    <footer>
      <h3>this is footer</h3>
    </footer>
  </div>
  
</template>

<style>
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

.offset-container{
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
}

.asking-login{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

footer{
  height: 40vh;
}



</style>