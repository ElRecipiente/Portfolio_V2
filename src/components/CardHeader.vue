<script setup>
import { ref } from 'vue';
import { store } from '../stores/store';

const title = ref('Not a chat')
const title2 = ref('but a Portfolio')

</script>

<template>
    <header :class="{ active: store.launchApp }">

        <h1>{{ title }}</h1>
        <span>{{ title2 }}</span>

    </header>
</template>

<style lang="scss" scoped>
header {
    background: black;
    color: white;
    width: 100%;
    padding: 1em;
    opacity: 100%;
    transition: opacity 0.4s ease-out;

    &.active {
        opacity: 0;

    }
}
</style>