<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
body{
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(245.59deg, #4d9559 0%, #38703d 28.53%, #133917 75.52%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

strong{
  color: #FD4520;
  font-weight: bold;
}

::-webkit-scrollbar {
  width: 8px; /* or any width you want */
}
::-webkit-scrollbar-track {
  background: white;
}
::-webkit-scrollbar-thumb {
  background-color:#1d3c23;
  border-radius: 10px; /* optional for rounded look */
}


</style>