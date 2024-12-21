<script setup lang="ts">
import Reciepe from './Reciepe.vue';
import Ingredient from './Ingredient.vue';
import AllIngredients  from '../ingredients';
import allRecipes from '../reciepes';

</script>

<template>
  <template v-for="i in AllIngredients" :key="i.name">
    <Ingredient :ingredient="i"  />
  </template>

  <template v-for="r in allRecipes" :key="r.name">
    <Reciepe :reciepe="r" />
  </template>
    
</template>

<style scoped>

</style>
