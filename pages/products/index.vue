<template>
    <div>
        <h2>{{ title }}</h2>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const title = ref('Products page')
</script>