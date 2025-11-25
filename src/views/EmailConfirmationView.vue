<script setup>
import { supabase } from '@/Clients/Supabase';
import router from '@/router';
import { onMounted } from 'vue';

onMounted(async () => {
  // Check if the user session is available
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    // User is logged in → Send them to dashboard
    router.replace('/dashboard');
  } else {
    // No session exists → Ask them to log in
    router.replace('/signin');
  }
});
</script>

<template>
  <main>
    <h1>Thank you for verifying your email...</h1>
    <h2>Now you can open the site again</h2>
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