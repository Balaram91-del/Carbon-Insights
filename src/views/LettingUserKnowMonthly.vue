<template>
  <div>
    <h1>Let's calculate Your Carbon Footprint of this month by answering some simple questions</h1>
    <router-link :to="{name:'CarbonFootprintCalculator'}">Proceed</router-link>
  </div>
</template>

<style scoped>
div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1{
  color: white;
  font-family: 'Oswald';

}

a{
  text-decoration: none;
  color: white;
  font-family: 'Raleway';
  padding: 10px;
  background-color: #FD4520;
  border-radius: 10px;
}

a:hover{
  color: white;
  border: white solid 1px;
  background-color: transparent;
}
</style>