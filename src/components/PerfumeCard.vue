<script setup lang="ts">
import { computed } from 'vue';

// Define Props (Equivalent to React Props)
const props = defineProps<{
  name: string;
  price: number;
  image: string;
}>();

// Computed Property (Equivalent to useMemo)
const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-AE', { 
    style: 'currency', 
    currency: 'AED' 
  }).format(props.price);
});

// Emits (How to talk to Parent)
const emit = defineEmits(['addToCart']);
</script>

<template>
  <div class="perfume-card">
    <img :src="image" :alt="name" />
    <h3>{{ name }}</h3>
    <p>{{ formattedPrice }}</p>
    <button @click="emit('addToCart', name)">Explore Scent</button>
  </div>
</template>

<style scoped>
/* 'scoped' means these styles only apply to this component */
.perfume-card {
  border: 1px solid #eee;
  padding: 20px;
  text-align: center;
}
button {
  background: #1a1a1a;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}
</style>