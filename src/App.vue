<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useCartStore } from './stores/cart';

const cart = useCartStore();
</script>

<template>
  <nav class="fixed bg-white top-0 w-full z-50 flex justify-between items-center px-10 py-6 text-white mix-blend-difference">
    <RouterLink to="/" class="text-2xl uppercase tracking-[0.3em] text-black font-light">Muschio</RouterLink>
    <div class="space-x-8 uppercase text-[10px] tracking-[0.2em] text-black font-semibold">
      <RouterLink to="/">Home</RouterLink>
      <a href="#contact">Contact</a>
      <RouterLink to="/checkout" class="border border-white px-4 py-2">
        Cart ({{ cart.items.length }})
      </RouterLink>
    </div>
  </nav>

  <main class="pt-20">
    <RouterView />
  </main>
</template>