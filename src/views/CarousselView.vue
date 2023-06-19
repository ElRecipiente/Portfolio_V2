<script setup>
import Card from '../components/Card.vue';
import { store } from '../stores/store'

</script>

<template>
    <main>
        <Card v-if="store.launchApp" v-for="(item, index) in store.projectData" :key="index" :itemProp="item" />
    </main>
</template>

<style lang="scss" scoped>
main {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

}
</style>
