<script setup lang="ts">
import type { IIngredient } from '../models/ingredient';

defineProps<{
    ingredient: IIngredient
}>();

</script>


<template>
    <img :src="ingredient.image" />
</template>


<style scoped>
img {
    background-image: url("Inventory_slot_background.png");
    background-size: contain;
    width: 64px;
    height: 64px;
}
</style>