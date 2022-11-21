<template>
    <div>
        <AppHeader />
        <div id="main">
            <slot />
        </div>
        <AppFooter />
    </div>
</template>

<script setup>
// import AppHeaderVue from '~~/components/AppHeader.vue';
// import AppFooterVue from '~~/components/AppFooter.vue';
</script>

<style>
#main{
    height: 100vh;
}
</style>