<script setup></script>

<template>
    <aside class="darkSide">

        <span>Welcome to the DarkSide.</span>
        <span>We know everything.</span>
        <span>You want the pass'.</span>
        <span>The pass' is :</span>
        <span>password</span>

    </aside>
</template>

<style lang="scss" scoped>
.darkSide {
    position: absolute;
    top: 7em;
    width: 300px;
    height: 350px;
    transform: perspective(1000px);
    transform: rotateY(180deg);
    transform-origin: center center -50px;
    box-shadow: 0 0 16px black;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: black;
    color: red;
}
</style>