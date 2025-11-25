<template>
  <div>
    <h1>To view this page and keep track of your data please login</h1>
    <router-link :to="{name: 'login'}">
      Login
      <i class="ri-login-box-line"></i>
    </router-link>
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
}

h1{
  color: white;
  font-family: 'Oswald';
}

a{
  font-family: 'Raleway';
  background-color: #FD4520;
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

a:hover{
  color: white;
  border: white 2px solid;
  background: transparent;
}
</style>