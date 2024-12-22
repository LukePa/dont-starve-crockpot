<script setup lang="ts">
import Reciepe from './Reciepe.vue';
import Ingredient from './Ingredient.vue';
import AllIngredients  from '../ingredients';
import allRecipes from '../reciepes';

</script>

<template>
  <div>
    <p>Ingredients</p>
    <template v-for="i in AllIngredients" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Recipes</p>
    <template v-for="r in allRecipes" :key="r.name">
      <Reciepe :reciepe="r" />
    </template>
  </div>
</template>

<style scoped>

</style>
