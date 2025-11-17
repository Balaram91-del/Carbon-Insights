<script setup>
import Navbar from '@/components/Navbar.vue';
import router from '@/router';

import { ref } from 'vue';

const showLogin = ref(false);
</script>

<template>
  <Navbar @loginClicked="showLogin = true"/>
  <main>
    <div v-if="showLogin" class="overlay">
      <button class="cancel-button" @click="showLogin=false">X</button>
      <div class="login-container">
        <div class="login-from">
          <div class="login-signup-holder">
            <router-link :to="{name:'login'}" class="login-routerlink">Login</router-link>
            <router-link :to="{name:'signup'}" class="signup-routerlink">Sign Up</router-link>
          </div>
          <RouterView />
        </div>
        <div class="image-container">
          <h1>Carbon Insights</h1>
          <img src="@\assets\Taking care of the Earth-bro.png" alt="">
          <h3>OUR FOOTPRINT, OUR RESPONSIBILITY</h3>
        </div>
      </div>
    </div>
  <section class="hero">
    <div class="hero-content">
      <h1>Our Carbon Footprint, <br>Our Responsibility.</h1>
      <p>Understand your environmental impact and discover <br>
        personalized ways to reduce your carbon footprint. <br>
         Small changes can make a big difference 
      </p>
      <div class="btn-container">
        <router-link class="joinus-btn">Join Us</router-link>
        <router-link class="cfc-btn" to="/dashboard/carbonFootprintCalculator">Calculate Carbon Footprint</router-link>
      </div>
    </div>

    <div class="hero-image">
      <img src="@\assets\Screenshot 2025-09-13 193948.png" alt="">
    </div>

    <div class="scroll-down">
      <i class="ri-arrow-down-s-fill"></i>
    </div>
  </section>
  </main>
  
</template>

<style scoped>
main{
      margin: 0%;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
section{
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  margin-top: 10%;
  padding: 0 4%;
  padding-left: 10%;
}

.hero-content h1{
  font-family: 'KoHo';
  color: white;
  font-weight: 900;
  font-size: 4rem;
}

.hero-content p{
  font-family: 'Raleway';
  color: white;
  line-height: 1.4;
  font-size: 1.5rem;
}

.btn-container{
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn-container a{
  margin-right: 20px;
  color: white;
  text-decoration: none;
}

.joinus-btn{
  /* background: #4d9559; */
  background-color: #FD4520;
  border-radius: 30px;
  padding: 12px 30px;
  font-size: 1.2rem;
}

.joinus-btn:hover{
  background: transparent;
  border: solid white 2px;
  color: white;
}

.cfc-btn{
  font-size: 1.2rem;
  border-radius: 30px;
  padding: 12px 30px;
  border: 1.5px solid;
}

.cfc-btn:hover{
  background-color: #FD4520;
  border: none;
}

.ri-scroll-to-bottom-line{
  color: white;
  font-size: 2rem;
}

.scroll-down{
  position: absolute;
  bottom: 6%;
  right: 9%;
}

.scroll-down i{
  font-size: 25px;
  color: white;
  padding: 12px;
  background: #4d9559;
  border-radius: 30px;
  transition: all .30s ease;
}

.scroll-down i:hover{
  background: transparent;
  border: white solid 2px;
}

.overlay{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(53, 51, 51, 0.5);
  /* background-color: hsla(0, 0%, 100%, .01); */
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(16px);
}

  .login-container{
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 70%;
    border-radius: 20px;
    background-color: aliceblue;
    z-index: 30;
  }

  .login-from{
    width: 50%;
    height: 100%;
    background-color: aliceblue;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
  }

  .login-signup-holder{
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  .login-signup-holder a{
    text-decoration: none;
    color: #126616;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .image-container{
    width: 50%;
    background-color:#0d4d10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  .image-container img{
    width: 80%;
    height: 50%;
  }

  .image-container h1,h3{
    color: white;
  }

  .cancel-button{
    position: fixed;
    top: 0;
    right: 0;
    margin: 30px;
    color: white;
    background-color: #0d4d10;
    font-size: 2rem;
    font-style: bold;
    cursor: pointer;
    border: none;
  }

  .login-routerlink.router-link-exact-active, .signup-routerlink.router-link-exact-active{
    text-decoration: underline solid #126616;
    text-decoration-thickness: 2px;
  }
</style>
