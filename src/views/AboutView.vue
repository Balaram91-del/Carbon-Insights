<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

defineProps({
  showNavbar: {type: Boolean, default: true}
})

</script>

<template>
  <Navbar v-if="showNavbar"/>
  <main>
    <section class="about-cf">
      <div class="content-container">
        <h1>Calculate and keep track of your Carbon Footprint with personalized reduction strategies in one platform</h1>
        <h3>Let's together make earth a better and healthier place to live</h3>
        <router-link to="/dashboard/monthlyCarbonFootprint">Calculate Your Carbon Footprint</router-link>
      </div>
      <div class="img-container">
        <img src="@\assets\3d-rendering-cartoon-house-removebg-preview.png" alt="3d-rendering-cartoon-house">
      </div>
    </section>

    <section class="benefit-section">
      <h1>Benefit</h1>
      <h2>Why Calculate Your Carbon Footprint ?</h2>
      <h3>Understanding your impact is the first step toward a more sustainable lifestyle.</h3>
      <div class="card-container">
        <div>
          <img width="70" height="70" src="https://img.icons8.com/external-stickers-smashing-stocks/70/external-Awareness-world-population-day-stickers-smashing-stocks.png" alt="external-Awareness-world-population-day-stickers-smashing-stocks"/>
          <h3>Awaraness</h3>
          <p>Know about your <strong>Carbon Footprint</strong> and  <strong>insights</strong> into which aspects of your lifestyle contribute most to your carbon footprint.</p>
        </div>
        <div>
          <img width="70" height="70" src="https://img.icons8.com/cotton/64/down-the-ladder.png" alt="down-the-ladder"/>
          <h3>Reduction Strategies</h3>
          <p>Receive tailored <strong>Recommendations</strong> based on your specific lifestyle and circumstances.</p>
        </div>
        <div>
          <img width="70" height="70" src="https://img.icons8.com/bubbles/50/positive-dynamic.png" alt="positive-dynamic"/>
          <h3>Track Progress</h3>
          <p>Monitor your <strong>improvements</strong> over time and see the positive impact of your sustainable choices.</p>
        </div>
      </div>
    </section>

    <section class="joinus-section">
      <h1>Ready to join our mission ?</h1>
      <h2>Be part of the global movement creating environmental change 
          through <br>calculating and reducing your carbon footprint.</h2>
      <div class="btn-container">
        <router-link to="/dashboard/monthlyCarbonFootprint" class="cfc-btn">Calculate your Carbon Footprint</router-link>
        <router-link :to="{name:'home'}" class="joinus-btn">Join Us</router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-cf{
  height: 50vh;
  width: 80vw;
  /* background-color: #c5dcd0; */
  display: flex;
  flex-direction: row;
  margin-top: 20vh;
  justify-content: center;
  align-items: center;
}

.img-container{
  width: 40%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.img-container img{
  width: 100%;
}

.content-container{
  width: 60%;
  justify-content: center;
}

.content-container h1{
  color: #FD4520;
  font-family: 'KoHo';
  font-weight: bold;
  font-size: 3rem;
}

.content-container h3{
  color: white;
  font-family: 'Raleway';
  font-size: 2rem;
}

.content-container a{
  background-color: #4d9559;
  text-decoration: none;
  color: white;
  font-family: 'Raleway';
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
}

.content-container a:hover{
  background-color: transparent;
  border: white solid 2px;
}

.benefit-section{
  margin-top: 10vh;
  width: 80%;
  height: 50vh;
  /* background-color: #7caa92; */
}

.benefit-section h1{
  color: #FD4520;
  font-family: 'KoHo';
  font-size: 3rem;
}

.benefit-section h2{
  color: white;
  font-family: 'Oswald';
  margin: 0px;
  font-size: 2rem;
}

.benefit-section h3{
  color: white;
  font-family: 'Raleway';
}

.card-container{
  display: flex;
  flex-wrap: wrap;
  margin-top: 8vh;
  justify-content: center;
  align-items: center;
}

.card-container div{
  width: 300px;
  margin: 0 50px;
}

.card-container div h3{
  color: #FD4520;
  font-family: 'Raleway';
  font-size: 1.7rem;
  margin: 0px;
}

.card-container div p{
  color: white;
  font-family: 'Raleway';
  font-size: 1.2rem;
}

.joinus-section{
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  margin-bottom: 10vh;
}

.joinus-section h1{
  color:#FD4520;
  font-family: 'KoHo';
  font-size: 3rem;
}

.joinus-section h2{
  color: white;
  font-family: 'Oswald';
  margin-top: 0;
  text-align: center;
}

.btn-container{
  display: flex;
  justify-content: space-around;
  width: 40%;
  margin-top: 20px;
}

.btn-container a{
  text-decoration: none;
  color: white;
  font-family: 'Raleway';
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.2rem;
}

.cfc-btn{
  background-color: #4d9559;
  border-radius: 10px;

}

.joinus-btn{
  border: 2px solid white;
}

.cfc-btn:hover{
  border: 2px solid white;
  background-color: transparent;
}

.joinus-btn:hover{
  background-color: #4d9559;
  border: none;
}
</style>
