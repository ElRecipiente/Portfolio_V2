<script setup>
import { store } from '../stores/store';

store.checkInputData()
</script>

<template>
    <form :class="{ vanish: store.launchApp }" @submit.prevent="store.checkInputData()">
        <input v-model="store.inputData" name="inputData" id="inputData" placeholder="Launch the rocket !"
            autocomplete="off">
        <button id="rocketButton"><img src="../../public/img/rocket-launch.svg" alt=""></button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    border-radius: 1em;


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

    #inputData {
        flex-grow: 1;
        padding: 1em;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: bold;
    }

    #rocketButton {
        border: none;
        padding: 1em;
        background: none;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 20px;
            height: 20px;
        }
    }
}
</style>