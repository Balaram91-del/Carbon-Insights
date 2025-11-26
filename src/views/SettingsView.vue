<script setup>
import router from '@/router';
import { useFootprintStore } from '@/stores/footprintStore';

const store = useFootprintStore();
</script>

<template>
<div class="container">
  <div class="profile-info">
    <i class="ri-user-3-line"></i>
    <h2>{{ store.username }}</h2>
  </div>
  <div class="settings-info">
    <button @click="router.push({name: 'Tired'})">
      <div class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/fluency/48/contact-card.png" alt="contact-card"/>
      </div>
      <div class="btn-info-container">
        <h3>Personal information</h3>
        <p>Keep your account accurate and verified.</p>
      </div>
      <i class="ri-arrow-right-s-fill"></i>
    </button>
    <button @click="router.push({name:'Tired'})">
      <div class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/color/48/password.png" alt="password"/>
      </div>
      <div class="btn-info-container">
        <h3>Security & Privacy</h3>
        <p>Protect your account.</p>
      </div>
      <i class="ri-arrow-right-s-fill"></i>
    </button>
    <button @click="router.push({name:'Tired'})">
      <div class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/color/96/settings--v1.png" alt="settings--v1"/>
      </div>
      <div class="btn-info-container">
        <h3>App Settings</h3>
        <p>Customize your app experience.</p>
      </div>
      <i class="ri-arrow-right-s-fill"></i>
    </button>
    <button @click="router.push({name:'Tired'})">
      <div class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/color/48/request-service.png" alt="request-service"/>
      </div>
      <div class="btn-info-container">
        <h3>Support & Help</h3>
        <p>Find answers when you need assistance.</p>
      </div>
      <i class="ri-arrow-right-s-fill"></i>
    </button>
    <button @click="router.push({name:'Tired'})">
      <div class="icon-container">
        <img width="40" height="40" src="https://img.icons8.com/color/48/trash--v1.png" alt="trash--v1"/>
      </div>
      <div class="btn-info-container">
        <h3>Delete Account</h3>
        <p>You better not delete your account.</p>
      </div>
      <i class="ri-arrow-right-s-fill"></i>
    </button>
  </div>
</div>
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
}

.profile-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-info h2{
  font-family: 'KoHo';
}

.ri-user-3-line{
  font-size: 2rem;
  color: #FD4520;
}

.settings-info{
  display: flex;
  flex-direction: column;
}

.settings-info button{
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      #113a15,
      rgba(67, 132, 78, 0.5)
    );
    /* background-size: 30px; */
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  margin: 5px;
  border: none;
  color: white;
  font-family: 'Raleway';
}

.icon-container{
  width: 20%;
}

button i{
  font-size: 1.5rem;
}

.btn-info-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn-info-container h3{
  margin-bottom: 0%;
}

</style>
