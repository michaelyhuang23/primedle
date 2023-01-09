<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  header{
    height: 6vh;
    background-color: black;
  }
  nav{
    text-align: center;
    padding-top: 1.5vh;
    font-size: 1.5em;
    height: 100%;
  }
  .nav-link{
    display: inline-block;
    height: 4.5vh;
    width: fit-content;
    padding-left: 1vw;
    padding-right: 1vw;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: 0.2s;
  }
  .nav-link:hover{
    color: rgba(255,255,255,0.5);
  }
  .router-link-active:hover{
    color:black;
  }
  .router-link-active{
    background-color: white;
    border-radius: 5% 5% 0% 0%;
    color:black;
  }
</style>
