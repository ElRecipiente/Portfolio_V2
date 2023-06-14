<script setup>
import { store } from '../stores/store';

store.checkInputData()
</script>

<template>
    <form @submit.prevent="store.checkInputData()" :class="{ active: store.launchApp }">
        <input v-model="store.inputData" name="inputData" id="inputData" placeholder="Launch the rocket !"
            autocomplete="off">
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

    #inputData {
        flex-grow: 1;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: bold;
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