<template>
    <div class="card text-center">
        <div class="grid justify-items-start">
            <img class="p-8 rounded-t-lg h-56 justify-self-stretch" :src="product.image" alt="product image" />
        </div>
        <div class="px-5 pb-5 text-black">
            <h5 class="text-md font-semibold tracking-tight m-4 truncate">
           {{ product.title }}
            </h5>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold">{{ product.price }} $</span>
                <nuxt-link 
                    :to="`/products/${product.id}`"
                    class="btn my-4"> 
                    Подробнее
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: {
    type: Object,
    default: () => ( {} )
  }
})
</script>

<style lang="scss" scoped>

</style>