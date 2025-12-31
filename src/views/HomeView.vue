<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '../stores/cart';

const cart = useCartStore();

const perfumes = ref([
  { id: 1, name: 'Muschio Noir', price: 450, note: 'Midnight Musk', img: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800' },
  { id: 2, name: 'Sabbia Gold', price: 520, note: 'Desert Oud', img: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800' },
  { id: 3, name: 'Luna Blanca', price: 380, note: 'White Floral', img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800' }
]);

const contactForm = ref({ name: '', email: '', message: '' });
</script>

<template>
  <div class="bg-[#F9F9F9] font-serif">
    <section class="relative h-[80vh] flex items-center justify-center bg-black">
      <img src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=2000" class="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div class="relative z-10 text-center">
        <h1 class="text-white text-6xl font-light tracking-[0.3em] uppercase">Muschio</h1>
        <p class="text-white/70 tracking-widest mt-4 uppercase">The Art of Scent</p>
      </div>
    </section>

    <section class="max-w-7xl mx-auto py-20 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="perfume in perfumes" :key="perfume.id" class="text-center group">
          <div class="relative overflow-hidden aspect-[3/4] mb-6">
            <img :src="perfume.img" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <button @click="cart.addToCart(perfume)" class="absolute bottom-0 left-0 w-full bg-black/80 text-white py-4 translate-y-full group-hover:translate-y-0 transition-transform uppercase text-xs tracking-widest">
              Add to Collection
            </button>
          </div>
          <h3 class="tracking-widest uppercase">{{ perfume.name }}</h3>
          <p class="text-gray-500 italic text-sm">{{ perfume.note }}</p>
          <p class="mt-2 text-sm">AED {{ perfume.price }}</p>
        </div>
      </div>
    </section>

    <section id="contact" class="bg-white py-24 px-6 border-t border-gray-100">
      <div class="max-w-xl mx-auto">
        <h2 class="text-2xl text-center uppercase tracking-[0.3em] mb-12">Contact the Atelier</h2>
        <form @submit.prevent class="space-y-6">
          <input v-model="contactForm.name" type="text" placeholder="NAME" class="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors uppercase text-xs tracking-widest" />
          <input v-model="contactForm.email" type="email" placeholder="EMAIL" class="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors uppercase text-xs tracking-widest" />
          <textarea v-model="contactForm.message" placeholder="MESSAGE" rows="4" class="w-full border-b border-gray-300 py-3 focus:border-black outline-none transition-colors uppercase text-xs tracking-widest"></textarea>
          <button class="w-full bg-[#1A1A1A] text-white py-4 uppercase text-xs tracking-[0.2em] hover:bg-black transition-colors">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  </div>
</template>