<script setup></script>

<template>
    <form>
        <input name="inputData" id="inputData" placeholder="Launch the rocket !">
        <button id="rocketButton"><img src="../assets/img/rocket-launch.svg" alt=""></button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8em;
    background: black;
    border-radius: 1em;

    #inputData {
        flex-grow: 1;
        background: none;
        border: none;
        outline: none;
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