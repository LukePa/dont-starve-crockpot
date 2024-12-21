<script setup lang="ts">
import type { IReciepe } from '../models/recipe';

const props = defineProps<{
    reciepe: IReciepe
}>()
</script>


<template>
    <img :src="reciepe.image"    
</template>


<style scoped>

</style>