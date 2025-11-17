<script setup>
import { supabase } from '@/Clients/Supabase';
import router from '@/router';
import { ref } from 'vue';

const email = ref("")
const password = ref("")

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    console.log(error);
  }
  else {
    router.push({name:'dashboard'})
  }
  
}
</script>

<template>
  <div class="container">
    <input type="email" placeholder="E-mail" required v-model="email">
    <input type="password" placeholder="password" v-model="password" required>
    <div class="button-holder">
      <p>Forgot password ?</p>
      <button @click="login">Login</button>
    </div>
    
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 50%;
  }

  .o-auth-container{
    display: flex;
    width: 100%;
  }

  .container input{
    border-radius: 20px;
    margin: 20px 0px;
    font-size: 1.125rem;
    padding: 10px 5px;
    border: none;
  }

  input::placeholder{
    color: #0d4d10;
  }

  .button-holder{
    display: flex;
    justify-content: space-between;
  }

  button{
    border: none;
    background-color: #0d4d10;
    font-size: 1.125rem;
    padding: 0px 25px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
  }
</style>