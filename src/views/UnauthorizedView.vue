<template>
  <div>
    <h1>To view this page and keep track of your data please login</h1>
    <router-link :to="{name: 'login'}">Login</router-link>
  </div>
</template>

<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

h1{
  color: white;
  font-family: 'Oswald';
}

a{
  font-family: 'Raleway';
  background-color: #FD4520;
  color: white;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
}

a:hover{
  color: white;
  border: white 2px solid;
  background: transparent;
}
</style>