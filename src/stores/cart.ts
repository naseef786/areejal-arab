import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity?: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<Product[]>([])

  const total = computed(() => 
    items.value.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  )

  function addToCart(product: Product) {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  function removeItem(id: number) {
    items.value = items.value.filter(i => i.id !== id)
  }

  return { items, total, addToCart, removeItem }
})