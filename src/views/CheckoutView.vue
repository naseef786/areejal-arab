<script setup lang="ts">
import { useCartStore } from '../stores/cart';

const cart = useCartStore();
</script>

<template>
  <div class="max-w-7xl mx-auto py-20 px-6 font-serif">
    <h1 class="text-3xl uppercase tracking-[0.2em] mb-12 border-b pb-6">Your Collection</h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div class="lg:col-span-2 space-y-8">
        <div v-if="cart.items.length === 0" class="py-20 text-center text-gray-400 uppercase tracking-widest">
          Your cart is empty
        </div>
        <div v-for="item in cart.items" :key="item.id" class="flex gap-6 border-b pb-8">
          <img :src="item.img" class="w-24 h-32 object-cover" />
          <div class="flex-1">
            <h3 class="uppercase tracking-widest">{{ item.name }}</h3>
            <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
            <button @click="cart.removeItem(item.id)" class="text-[10px] uppercase text-red-800 mt-4 tracking-tighter">Remove</button>
          </div>
          <p class="text-sm">AED {{ item.price * (item.quantity || 1) }}</p>
        </div>
      </div>

      <div class="bg-gray-50 p-8 h-fit">
        <h2 class="uppercase tracking-widest mb-6">Order Summary</h2>
        <div class="flex justify-between border-b pb-4 mb-4">
          <span>Subtotal</span>
          <span>AED {{ cart.total }}</span>
        </div>
        <div class="flex justify-between font-bold text-lg mb-8">
          <span>Total</span>
          <span>AED {{ cart.total }}</span>
        </div>
        
        <div class="space-y-4">
          <h3 class="text-xs uppercase tracking-widest mb-4">Shipping Details</h3>
          <input type="text" placeholder="STREET ADDRESS" class="w-full bg-transparent border-b border-gray-300 py-2 text-xs outline-none focus:border-black" />
          <div class="grid grid-cols-2 gap-4">
            <input type="text" placeholder="CITY" class="w-full bg-transparent border-b border-gray-300 py-2 text-xs outline-none focus:border-black" />
            <input type="text" placeholder="ZIP" class="w-full bg-transparent border-b border-gray-300 py-2 text-xs outline-none focus:border-black" />
          </div>
          <button class="w-full bg-black text-white py-4 mt-6 uppercase text-xs tracking-widest">
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  </div>
</template>