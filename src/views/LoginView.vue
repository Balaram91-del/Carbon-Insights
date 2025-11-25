<script setup>
import { supabase } from '@/Clients/Supabase';
import Loader from '@/components/Loader.vue';
import router from '@/router';
import { ref } from 'vue';

const loading = ref(false);

const email = ref("")
const password = ref("")

async function login() {
  loading.value = true;

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) {
    console.log("Login error:", error.message);
    return; // IMPORTANT
  }

  // Login successful
  const session = data.session;
  localStorage.setItem("uid", session.user.id);

  loading.value = false;

  router.push({ name: 'dashboardHome' });
}

</script>

<template>
  <Loader v-if="loading"/>

  <div v-else class="container">
    <input type="email" placeholder="E-mail" required v-model="email">
    <input type="password" placeholder="password" v-model="password" required>
    <div class="button-holder">
      <p>Forgot password ?</p>
      <button @click="login">Login</button>
    </div>
    <p>
      Don't have an account? 
      <router-link :to="{name: 'signup'}" class="signup-btn">SignUp</router-link>
    </p>
    
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
    font-family: 'Raleway';
  }

  p{
    color: #0d4d10;
  }

.signup-btn{
  text-decoration: none;
  color: #FD4520;
}

.signup-btn:hover{
  border-bottom: 2px solid #FD4520;;
}
</style>