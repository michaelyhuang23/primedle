<script setup>
import GameRow from '../components/GameRow.vue';
import {numCard, numRow, mapInitial, map, primes, chosenPrime, currentRow, states, statesInitial} from '../store/gamestate.js'
import { ref,computed,nextTick } from 'vue'

const resetGame = async () => {
  popupFailure.value = false;
  popupSuccess.value = false;
  map.value = JSON.parse(JSON.stringify(mapInitial));
  currentRow.value = 0;
  states.value = JSON.parse(JSON.stringify(statesInitial));  
  await nextTick();
  const idx = Math.floor(Math.random() * primes.length);
  chosenPrime.value = primes[idx];
};

const popupSuccess = ref(false);
const popupFailure = ref(false);

resetGame();

const activateSuccess = () => {
  currentRow.value = numRow.value;
  setTimeout(() => popupSuccess.value = true, 500*numCard.value);
}

const activateFailure = () => {
  currentRow.value = numRow.value;
  setTimeout(() => popupFailure.value = true, 500*numCard.value);
}

const decomposedPrime = computed(() => {
  let decomposePrime = new Array(numCard.value);
  let num = chosenPrime.value;
  for(let i=numCard.value-1;i>=0;i--){
    decomposePrime[i] = num % 4;
    num = Math.floor(num/4);
  }
  return decomposePrime.join(" ");
})


</script>

<template>
  <main>
    <h1 class="title">Primedle in base 4</h1>
    <div v-if="popupSuccess" class="popup">
      <h1>{{ chosenPrime }}</h1>
      <h3>Congratulations</h3>
      <button @click.prevent="resetGame">Another game</button>
    </div>
    <div v-if="popupFailure" class="popup">
      <h1>{{ chosenPrime }}</h1>
      <h3>{{ decomposedPrime }}</h3>
      <button @click.prevent="resetGame">Another game</button>
    </div>
    <div class="table">
      <div v-for="row in numRow" :key="row">
        <GameRow :row="row-1" @success="activateSuccess" @failure="activateFailure"/>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title{
  text-align: center;
  margin-top: 10vh;
  font-size: 2em;
}
.table{
  padding-top: 4vh;
  margin:auto;
  width: fit-content;
}

.popup{
  position: fixed;
  top: 8vh;
  left: calc(50vw - 100px);
  z-index: 1000;
  background-color: black;
  width: 200px;
  padding: 20px;
  border-radius: 10%;
  text-align: center;
  color:white;
  box-shadow: 0px 5px 10px 2px rgba(0,0,0,0.5);
}

.popup-success-hover{
  color:black;
  background-color: white;
}

button{
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 8px;
  box-shadow: 0px -2px 10px 2px rgba(255,255,255,0.5);
  font-size: 1em;
  transition: 0.3s;
  font-weight: bold;
}

button:hover{
  background-color: gray;
}

h1{
  font-weight: bold;
}
h3{
  font-weight: bold;
}

</style>