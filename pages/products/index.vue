<template>
    <div>
        <h1>{{ productPageTitle }}</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id">
                <CatalogProductCard :product="product"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const productPageTitle = ref('Products page')

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>