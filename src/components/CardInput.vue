<script setup>
import { store } from '../stores/store';
import { ref } from 'vue';

const inputValue = ref('')

</script>

<template>
    <form @submit.prevent="store.checkInputData()">
        <input v-model="store.inputData" name="inputData" id="inputData" placeholder="Launch the rocket !">
        <button id="rocketButton"><img src="../assets/img/rocket-launch.svg" alt=""></button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background: black;
    border-radius: 1em;

    #inputData {
        flex-grow: 1;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: bold;

        &::placeholder {
            color: whitesmoke;
        }
    }

    #rocketButton {
        border: none;
        background: none;

        img {
            width: 20px;
            height: 20px;
        }
    }
}
</style>