<script setup lang="ts">
import Reciepe from './Reciepe.vue';
import Ingredient from './Ingredient.vue';
import allIngredients from '../ingredients';
import allRecipes from '../reciepes';

import Meatballs from '../reciepes/meatballs';
import smallJerky from '../ingredients/smallJerky';
import berries from '../ingredients/berries';
import twig from '../ingredients/twig';
import butterflyWings from '../ingredients/butterflyWings';
import ButterMuffin from '../reciepes/butterMuffin';
import corn from '../ingredients/corn';

const test = () => {
  const meatball = new Meatballs();
  const butterMuffin = new ButterMuffin();
  //alert(meatball.fitsIngredients(smallJerky, smallJerky, smallJerky, smallJerky))
  //alert(meatball.fitsIngredients(berries, berries, berries, berries))
  //alert(meatball.fitsIngredients(smallJerky, smallJerky, smallJerky, twig))

  alert(butterMuffin.fitsIngredients(butterflyWings, corn, corn, twig))
}

</script>

<template>
  <button @click="test">Run test</button>
  <div>
    <p>Ingredients (veg)</p>
    <template v-for="i in allIngredients.filter(ing => ing.vegetables)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (meat)</p>
    <template v-for="i in allIngredients.filter(ing => ing.meat)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (fish)</p>
    <template v-for="i in allIngredients.filter(ing => ing.fish)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (egg)</p>
    <template v-for="i in allIngredients.filter(ing => ing.egg)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (fruit)</p>
    <template v-for="i in allIngredients.filter(ing => ing.fruit)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (sweet)</p>
    <template v-for="i in allIngredients.filter(ing => ing.sweeteners)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (monster)</p>
    <template v-for="i in allIngredients.filter(ing => ing.monster)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (dairy)</p>
    <template v-for="i in allIngredients.filter(ing => ing.dairy)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (bug)</p>
    <template v-for="i in allIngredients.filter(ing => ing.bug)" :key="i.name">
      <Ingredient :ingredient="i"  />
    </template>
  </div>

  <div>
    <p>Ingredients (misc)</p>
    <template v-for="i in allIngredients.filter(ing => !ing.bug && !ing.dairy && !ing.egg && !ing.fish && !ing.fruit && !ing.meat && !ing.monster && !ing.sweeteners && !ing.vegetables)" :key="i.name">
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
