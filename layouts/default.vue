<template>
    <div>
        <NavsTheHeader />
        <div id="main">
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