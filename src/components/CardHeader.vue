<script setup>
import { ref } from 'vue';

const title = ref('Not a chat')
const title2 = ref('but a Portfolio')

</script>

<template>
    <header>

        <h1>{{ title }}</h1>
        <h2>{{ title2 }}</h2>

    </header>
</template>

<style lang="scss" scoped>
header {
    background: black;
    color: white;
    width: 100%;
}
</style>