<template>
    <div class="mt-7 max-w-sm mx-auto text-center">
        <p class="mt-7 text-6xl">{{ error.statusCode }}</p>
        <p class="mt-7 text-5xl">{{ error.message }}</p>
        <button class="mt-7" @click="handleClearError">
            <nuxt-link class="btn" to="/">Home page</nuxt-link>
        </button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/'})
</script>

<style scoped>

</style>