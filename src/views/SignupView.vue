<script setup>
import { supabase } from '@/Clients/Supabase';
import Loader from '@/components/Loader.vue';
import router from '@/router';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const loading = ref(false);

const ShowVerifyMessage = ref(false);

const email = ref("");
const password = ref("");
const username = ref("");

let pollInterval = null;

// Create Account
async function createAccount() {

  if (!email.value || !password.value || !username.value) {
  alert("Please fill all fields");
  loading.value = false;
  return;
}

  loading.value = true;

  // 1. Sign up user
  const { data: signupData, error: signupError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (signupError) {
    console.log(signupError);
    loading.value = false;
    return;
  }

  // 2. Insert profile row
  const { error: profileError } = await supabase
    .from("Profiles")
    .insert({
      id: signupData.user.id,
      username: username.value,
      email_id: email.value,
    });

  if (profileError) {
    console.log(profileError);
    loading.value = false;
    return;
  }

  loading.value = false;

  // alert("Signup successful! Please verify your email.\nThis page will auto-redirect after verification.");
  ShowVerifyMessage.value = true;
}
</script>

<template>
  <Loader v-if="loading"/>

  <div class="verify-message-container" v-else-if="ShowVerifyMessage">
    <div class="verify-message">
      <p>Signup successful! Please verify your email. <br>
        After verifying your email please 
        <router-link :to="{name:'login'}" class="login-btn">Login</router-link>
      </p>
    </div>
    <Loader />
  </div>

  <div v-else class="signup-form">
    <input type="text" placeholder="Username" required v-model="username">
    <input type="email" placeholder="E-mail" required v-model="email">
    <input type="password" placeholder="password" required v-model="password">
    <button class="signup-btn" @click="createAccount" :disabled="loading">Sign Up</button>
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
    color: #0d4d10;
}

input:focus{
  outline: #0d4d10 solid 2px;
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

.verify-message{
  background-color: #98dc9c;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  border: #0d4d10 solid 2px;
}

.verify-message p{
  color: #08280a;
  font-family: 'Raleway';
}

.login-btn{
  text-decoration: none;
  color: #FD4520;
}

.login-btn:hover{
  border-bottom: 2px solid #FD4520;;
}
</style>