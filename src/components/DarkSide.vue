<script setup></script>

<template>
    <aside class="darkSide">

        <span>KeYwOrDs</span>
        <br>
        <span>Hello World</span>
        <span>TheRedButton</span>
        <span>password</span>

    </aside>
</template>

<style lang="scss" scoped>
.darkSide {
    position: absolute;
    top: 30%;
    width: 250px;
    height: 300px;
    transform: perspective(1000px);
    transform: rotateY(180deg);
    transform-origin: center center -50px;
    box-shadow: 0 0 16px black;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: rgba(0, 0, 0, 0.9);
    color: red;
    text-shadow: 0 0 1px rgb(255, 0, 0);
}
</style>