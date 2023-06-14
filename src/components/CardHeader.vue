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
    visibility: visible;


    &.active {
        animation: vanish 1s forwards;

        @keyframes vanish {
            0% {
                opacity: 100%;
            }

            100% {
                opacity: 0;
                display: none;
            }
        }
    }
}
</style>