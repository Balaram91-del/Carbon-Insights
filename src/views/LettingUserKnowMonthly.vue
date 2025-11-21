<template>
  <div>
    <h1>Let's calculate Your Carbon Footprint of this month by answering some simple questions</h1>
    <router-link :to="{name:'CarbonFootprintCalculator'}">
      Proceed
      <i class="ri-arrow-right-fill"></i>
    </router-link>
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
  padding: 10px 40px;
  background-color: #FD4520;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

a:hover{
  color: white;
  border: white solid 1px;
  background-color: transparent;
}
</style>