<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';

defineProps({
  showNavbar: {type: Boolean, default: true}
})

</script>

<template>
  <Navbar v-if="showNavbar"/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.about{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
</style>
