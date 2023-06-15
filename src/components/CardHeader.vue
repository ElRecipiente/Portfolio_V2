<script setup>
import { ref } from 'vue';
import { store } from '../stores/store';

const title = ref('Not a chat')
const title2 = ref('but a Portfolio')

</script>

<template>
    <header :class="{ vanish: store.launchApp }">

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
    border-radius: 1em 1em 0 0;
    box-shadow: 0 2px 4px black;

    &.vanish {
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