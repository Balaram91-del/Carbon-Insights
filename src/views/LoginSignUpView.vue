<template>
  <main>
    <div class="btn-container">
      <button class="cancel-btn" @click="$router.back()">
        <i class="ri-close-circle-fill"></i>
      </button>
    </div>
    <div class="login-container">
        <div class="login-from">
          <div class="login-signup-holder">
            <router-link :to="{name:'login'}" class="login-routerlink">Login</router-link>
            <router-link :to="{name:'signup'}" class="signup-routerlink">Sign Up</router-link>
          </div>
          <RouterView />
        </div>
        <div class="image-container">
          <h1>Carbon Insights</h1>
          <img src="@\assets\Taking care of the Earth-bro.png" alt="">
          <h3>OUR FOOTPRINT, OUR RESPONSIBILITY</h3>
        </div>
      </div>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}

.login-container{
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 70%;
    border-radius: 20px;
    background-color: aliceblue;
    z-index: 30;
  }

  .login-from{
    width: 50%;
    height: 100%;
    background-color: aliceblue;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
  }

  .login-signup-holder{
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  .login-signup-holder a{
    text-decoration: none;
    color: #126616;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .image-container{
    width: 50%;
    background-color:#0d4d10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  .image-container img{
    width: 80%;
    height: 50%;
  }

  .image-container h1,h3{
    color: white;
  }

.login-routerlink.router-link-exact-active, .signup-routerlink.router-link-exact-active{
  text-decoration: underline solid #126616;
  text-decoration-thickness: 2px;
}

.btn-container{
  width: 100%;
  display: flex;
  justify-content: end;
}

.cancel-btn{
  background-color: transparent;
  border: none;
  color: aliceblue;
  font-size: 2rem;
  cursor: pointer;
}
</style>