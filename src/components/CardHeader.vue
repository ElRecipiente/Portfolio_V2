<script setup>
import { ref } from 'vue';

const title = ref('Not a chat')
const title2 = ref('but a Portfolio')

</script>

<template>
    <header>

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
}
</style>