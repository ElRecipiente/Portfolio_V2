<script setup>
import CardHeader from './CardHeader.vue';
import CardInput from './CardInput.vue';
import { ref } from 'vue';
import { store } from '../stores/store';

</script>

<template>
    <section class="card">

        <CardHeader />

        <div class="container">

            <CardInput />
        </div>

    </section>
</template>

<style lang="scss" scoped>
.card {
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    padding: 2em;
    background-color: white;
    box-shadow: 0 0 4px black;
    width: 360px;
    height: 600px;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);

    .container {
        width: 100%;
    }
}
</style>