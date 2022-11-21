<template>
    <div>
        <NavsTheHeader />
        <div id="main" class="container mx-auto p-4">
            <slot />
        </div>
        <NavsTheFooter />
    </div>
</template>

<script setup>

</script>

<style>
#main{
    height: 100vh;
}
</style>