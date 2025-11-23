<script setup>
import { supabase } from '@/Clients/Supabase';
import router from '@/router';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const showSidebar = ref(true);

async function Logout() {
  const { error } = await supabase.auth.signOut();
  router.push({name:'home'})
}

let { data: profile, error } = await supabase.from('Profiles').select('username').eq('id', localStorage.getItem('uid')).single();
</script>

<template>
  <header>
    <div class="logo-container">
      <button class="sidebar-btn" @click="showSidebar=!showSidebar"><i class="ri-menu-line" id="menu-icon"></i></button>
      <router-link to="/" class="logo"><h1>CARBON <strong>INSIGHTS</strong> </h1></router-link>
    </div>
    <div class="user-profile">
      <i class="ri-notification-4-line"></i>
      <i class="ri-user-3-line"></i>
      <h4>{{ profile.username }}</h4>
    </div>
  </header>
  <main>
    <div class="sidebar-holder" v-if="showSidebar">
      <div class="sidebar">
      <div>
        <router-link to="/dashboard" class="router-link">
          <i class="ri-dashboard-line"></i>
          Dashboard
        </router-link>
      </div>
      <div>
        <router-link to="/dashboard/monthlyCarbonFootprint" class="router-link">
          <i class="ri-calculator-line"></i>
          Carbon Footprint
        </router-link>
      </div>
      <div>
        <router-link to="/dashboard/about" class="router-link">
          <i class="ri-info-i"></i>
          About
        </router-link>
      </div>
      <div>
        <router-link to="/dashboard/FAQ" class="router-link">
          <i class="ri-question-line"></i>
          FAQ
        </router-link>
      </div>
      <div>
        <router-link to="/dashboard/settings" class="router-link">
          <i class="ri-settings-3-line"></i>
          Settings
        </router-link>
      </div>
      <div>
        <button @click="Logout">
          <i class="ri-logout-circle-r-line"></i>
          Logout
        </button>
      </div>
      </div>
    </div>
    <div class="dashboard-content">
      <Suspense :key="$route.fullPath">
        <template #default>
          <router-view :key="$route.fullPath"/>
        </template>

        <template #fallback>
          <div class="loader-container">
            <div class="loader"></div>
          </div>
        </template>
      </Suspense>
    </div>

  </main>
</template>

<style scoped>

strong{
  color: #FD4520;
}

header{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
}

.logo-container,.user-profile{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.logo{
  text-decoration: none;
  color: white;
  font-family: 'KoHo';
  margin-left: 30px;
}

.logo-container i{
  font-size: 1.8rem;
}

.user-profile i, .user-profile h4{
  margin-left: 25px;
  font-size: 1.5rem;
}

main{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
}

.sidebar-holder{
  width: 20%;
  height: 100%;
}

.sidebar{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  height: 70%;
  position: absolute;
  margin-left: 70px;
  top: 170px;
  /* background-color: #336a18b9; */
  border: none;
  /* backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.068),
                rgba(250, 250, 250, 0.08));
    border-radius: 23px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
    transform-origin: center center;
    will-change: transform, filter; */
    background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      rgba(67, 132, 78, 0.5),
      #113a15
    );
    background-size: 30px;
    border-radius: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.sidebar div{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.sidebar div i{
  margin-right: 10px;
  font-size: 1.5rem;
}
.sidebar a, .sidebar button{
  background-color: transparent;
  text-decoration: none;
  border: none;
  color: white;
  font-family: "Oswald";
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dashboard-content{
  width: 80%;
  height: 100%;
  display: flex;
}

.sidebar-btn{
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}

.sidebar button:hover{
  cursor: pointer;
}

.router-link.router-link-exact-active{
  color: #FD4520;
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

</style>