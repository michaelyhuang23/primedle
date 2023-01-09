<script setup>
import {numCard, numRow, currentRow, map} from '../store/gamestate.js'
import { computed } from 'vue';

const {row, col, state} = defineProps(["row", "col", "state"]);

const active = computed(()=> currentRow.value === row);

const incrementMap = () => {
    if(active.value)
        map.value[row][col] = (map.value[row][col]+1)%4;
}

const mapval = computed(() => map.value[row][col]===-1 ? "" : map.value[row][col]);
</script>

<template>
<div class='box' :class="{ 'active' : active, 'isRight' : state===1, 'isWrong' : state===2 }" @click.prevent="incrementMap" @mousedown.prevent @mousemove.prevent>
    {{ mapval }}
</div>  
</template>

<style scoped>
.box{
    display: block;
    font-size: 47px;
    text-align: center;
    border: 2px solid black;
    cursor: default;
    margin-left: 3px;
    margin-right: 3px;
    width: 75px;
    height: 80px;
}
@keyframes flip-right{
    0% {
        transform: rotateY(0deg);
    }
    49% {
        background-color: white;
        color: black;
    }
    50% {
        transform: rotateY(90deg);
        background-color: #749972;
        color: white;
    }
    100% {
        transform: rotateY(0deg);
    }
}
@keyframes flip-wrong{
    0% {
        transform: rotateY(0deg);
    }
    49% {
        background-color: white;
        color: black;
    }
    50% {
        transform: rotateY(-90deg);
        background-color: #959a9e;
        color: white;
    }
    100% {
        transform: rotateY(0deg);
    }
}

.isRight{
    animation: flip-right 0.5s;
    animation-iteration-count: 1;
    background-color: #749972;
    color: white;
}
.isWrong{
    animation: flip-wrong 0.5s;
    animation-iteration-count: 1;
    background-color: #959a9e;
    color: white;
}
.active{
    cursor: pointer;
    transition: 0.2s;
}
.active:hover{
    text-shadow: 2px 2px rgba(173,173,173);
}
</style>