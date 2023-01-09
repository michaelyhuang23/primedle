<script setup>
import GameCard from './GameCard.vue';
import {numCard, currentRow, map, primes, chosenPrime, states, numRow} from '../store/gamestate'
import { computed, watch } from 'vue';

const {row} = defineProps(["row"]);
const emits = defineEmits(["success, failure"])

const active = computed(()=> currentRow.value === row);

watch(active, (newActive) => {
    console.log(newActive, row);
    if(newActive){
        for(let i=0;i<numCard.value;i++){
            map.value[row][i] = 0;
        }
    }
})

const rowNumber = computed(() => {
    if(!active.value) return "";
    var num = 0;
    for(let i=numCard.value-1;i>=0;i--){
        num+=map.value[row][i]*Math.pow(4, numCard.value-1-i);
    }
    return num;
});

const isPrime = computed(() => {
    return primes.includes(rowNumber.value);
});

const submitNumber = () => {
    let decomposePrime = new Array(numCard.value);
    let num = chosenPrime.value;
    for(let i=numCard.value-1;i>=0;i--){
        decomposePrime[i] = num % 4;
        num = Math.floor(num/4);
    }
    let allTrue = true;
    for(let i=0;i<numCard.value;i++){
        if(decomposePrime[i] === map.value[row][i]){
            setTimeout(() => states.value[row][i] = 1, 500*i);
        }else{
            setTimeout(() => states.value[row][i] = 2, 500*i);
            allTrue = false;
        }
    }
    currentRow.value++;
    if(allTrue){
        emits("success");
        return;
    }
    if(currentRow.value >= numRow.value){
        emits("failure");
        return;
    }
};

const getState = (col) => {
    return states.value[row][col-1]
}

</script>

<template>
    <span v-if="active" class="number" :class="{'prime' : isPrime}">{{ rowNumber }}</span>
    <div class="row">
        <GameCard v-for="col in numCard" :row="row" :col="col-1" :key="col" :state="getState(col)"/>
    </div>
    <font-awesome-icon v-if="active && isPrime" class="arrow" icon="fa-solid fa-chevron-right" @click.prevent="submitNumber"/>
</template>

<style scoped>
.number{
    position: absolute;
    left: -55px;
    font-size: 20px;
    height: fit-content;
    width: 55px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 12px;
    color: white;
    background-color: #4e5154;
}
.prime{
    background-color: #60805e;
}
.arrow{
    position: absolute;
    right: -37.5px; 
    top: 18.75px;
    font-size: 35px;
    color:white;
    background-color: black;
    box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, .5);
    border-radius: 20% 100% 100% 20%;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    transition: 0.2s;
}
.arrow:hover{
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, .8);
}
.row{
    display: flex;
    flex-direction: row;
    margin-top: 7px;
}
</style>