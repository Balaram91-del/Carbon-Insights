<script setup>
import { supabase } from '@/Clients/Supabase';
import router from '@/router';
import { onMounted, ref } from 'vue';

const showThankYouMessage = ref(false)

onMounted(async () => {
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    // User logged in → show message for 2 seconds → redirect
    showThankYouMessage.value = true
    setTimeout(() => {
      router.replace('/dashboard');
    }, 2000);
  } else {
    // User not logged in → show message forever, no redirect
    showThankYouMessage.value = true
  }
});
</script>

<template>
  <main v-if="showThankYouMessage">
    <h1>Thank you for verifying your email...</h1>
    <h2>Now please sign in manually</h2>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1, h2{
  color: white;
  font-family: 'Raleway';
}
</style>