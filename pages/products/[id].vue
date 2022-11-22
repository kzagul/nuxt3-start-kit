<template>
    <div>
        <p>product details for {{ id }}</p>
        <p> {{ product.title }}</p>
        <p> {{ product.price }}</p>
    </div>
</template>

<script setup> 
const { id } = useRoute().params

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)
</script>
