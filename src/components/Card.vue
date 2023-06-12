<script setup>
import CardHeader from './CardHeader.vue';
import CardInput from './CardInput.vue';
import DarkSide from './DarkSide.vue';
import { store } from '../stores/store';

</script>

<template>
    <section :class="{ active: store.isRotate }" class="card">
        <DarkSide />
        <CardHeader />

        <div class="container">
            <div class="text_content">
                <span>{{ store.welcome }}&nbsp;</span>
                <span class="underscore">_</span>
            </div>
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
    background-color: white;
    box-shadow: 0 0 16px white;
    width: 360px;
    height: 600px;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%) perspective(1000px) rotate3d(0, 0, 0, 0deg);
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: all 0.4s ease-out;

    &.active {
        background: red;
        transform: translate(-50%, -50%) perspective(1000px) rotate3d(0, 180, 0, 180deg);
    }

    .container {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: 100%;
        flex-grow: 1;
        padding: 1em;
        font-weight: 600;

        .text_content {
            .underscore {
                opacity: 0;
                animation: clipping 1s infinite;
            }

            @keyframes clipping {
                0% {
                    opacity: 0;
                }

                1% {
                    opacity: 1;
                }

                50% {
                    opacity: 1;
                }

                51% {
                    opacity: 0%;
                }
            }
        }
    }
}
</style>