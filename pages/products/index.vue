<template>
    <div>
        <h2>{{ title }}</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">
                <nuxt-link :to="`/products/${product.id}`">{{ product.title }}</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const title = ref('Products page')

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>