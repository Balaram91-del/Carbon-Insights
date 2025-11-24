<script setup>
import q from "@/questions/faq.json"
</script>

<template>
  <div class="wrapper">
    <h1>FA<strong>Q</strong></h1>
    <h2><strong>Frequently</strong> Asked Questions</h2>
    <div class="faq-container">
      <details v-for="question in q">
        <summary>
          <h3>{{ question.question }}</h3>
          <b></b>
        </summary>
        <p>{{question.answer}}</p>
      </details>
    </div>
  </div>
  
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  color: white;
}

.wrapper h1{
  font-size: 3rem;
}

.wrapper h1, .wrapper h2{
  font-family: 'KoHo';
  margin-top: 0;
  letter-spacing: 3px;
  font-weight: bold;
}

.wrapper h2{
  font-size: 2.3rem;
}

.faq-container{
  width: 70%;
  display: flex;
  flex-direction: column;
}

.faq-container details{
  cursor: pointer;
  padding: 10px 20px;
  background-color: transparent;
    backdrop-filter: blur(20px);
    background-image: linear-gradient(
      120deg,
      #113a15,
      rgba(67, 132, 78, 0.5)
    );
    /* background-size: 30px; */
    border-radius: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1);
  margin: 10px;
}

.faq-container details:hover{
  background-color: #4dbc5e;
}

.faq-container details summary{
  font-family: 'Oswald';
  letter-spacing: 0.8px;
}

.faq-container details p{
  font-family: 'Raleway';
  line-height: 1.6;
}

details > summary:first-of-type{
  list-style-type: none;
}

details summary::-webkit-details-marker{
  display: none;
}

summary{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

summary b::after{
  content: '+';
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Oswald';
}

details[open] summary b::after{
  content: '-';
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Oswald';
}
</style>