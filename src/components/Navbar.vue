<script setup>
import { ref } from 'vue'

const emit = defineEmits(['loginClicked'])

</script>

<template>
  <nav>
    <router-link to="/" class="logo">CARBON <strong>INSIGHTS</strong></router-link>

    <ul class="menu">
      <router-link to="/">HOME</router-link>
      <router-link to="/dashboard/monthlyCarbonFootprint">CARBON FOOTPRINT</router-link>
      <router-link to="/about">ABOUT</router-link>
      <button class="login-btn" @click.prevent="$emit('loginClicked')">LOGIN</button>
    </ul>

    <i class="ri-menu-line" id="menu-icon"></i>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  background: transparent;
}

a, .login-btn {
  text-decoration: none;
  font-weight: 500;
  font-family: 'Oswald';
}

.logo {
  font-family: 'KoHo';
  color: white;
  font-weight: bold;
  font-size: 2rem;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  font-size: 18px;
  transition: all 0.5s ease;
}

.menu a, .login-btn {
  color: white;
  transition: border 0.3s ease;
  cursor: pointer;
}

.menu a:hover, .login-btn:hover {
  border-bottom: 2px solid white;
}

.menu button{
  background-color: transparent;
  color: white;
  border: none;
  font-size: 18px;
  /* font-family: 'Oswald'; */
}

#menu-icon {
  color: white;
  font-size: 2rem;
  cursor: pointer;
  display: none;
}

/* === Responsive === */

</style>
