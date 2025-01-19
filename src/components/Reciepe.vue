<script setup lang="ts">
import type Recipe from '../classes/recipe';


const props = defineProps<{
    reciepe: Recipe
}>()

</script>


<template>
    <img :src="reciepe.image"/>   
</template>


<style scoped>
img {
    background-image: url("Inventory_slot_background.png");
    background-size: contain;
    width: 64px;
    height: 64px;
    cursor: pointer;
}
</style>