<script setup>
import { supabase } from '@/Clients/Supabase';
import router from '@/router';
import { ref } from 'vue';

const email = ref("");
const password = ref("")
const username = ref("")

//creat account
async function createAccount() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        username : username.value
      }
    }
  })
  if (error) {
    console.log(error)
  }
  else {
    alert("Signup successful! Please verify your email before logging in.");
    router.push({name:'login'})
  }
}

</script>

<template>
  <div class="signup-form">
    <input type="text" placeholder="Username" required v-model="username">
    <input type="email" placeholder="E-mail" required v-model="email">
    <input type="password" placeholder="password" required v-model="password">
    <button class="signup-btn" @click="createAccount">Sign Up</button>
    <p class="info-message"></p>
  </div>
</template>

<style scoped>
.signup-form{
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 50%;
}

.signup-form input{
    border-radius: 20px;
    margin: 20px 0px;
    font-size: 1.125rem;
    padding: 10px 5px;
    border: none;
}

input::placeholder{
  color: #0d4d10;
}

.signup-btn{
    border: none;
    background-color: #0d4d10;
    font-size: 1.125rem;
    padding: 20px 25px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
}

.info-message{
  color: #0d4d10;
  margin-top: 20px;
}

alert{
  background-color: #0d4d10;
}
</style>