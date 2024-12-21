<script setup lang="ts">
import type { IIngredient } from '../models/ingredient';

const props = defineProps<{
    ingredient: IIngredient
}>();

</script>


<template>
    <div class="ingredient-container">
        <img :src="ingredient.image" />
    </div>
</template>


<style scoped>

</style>