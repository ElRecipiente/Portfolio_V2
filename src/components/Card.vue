<script setup>
import CardHeader from './CardHeader.vue';
import CardInput from './CardInput.vue';
import DarkSide from './DarkSide.vue';
import { store } from '../stores/store';
const props = defineProps({
    itemProp: Object
})

</script>

<template>
    <section v-if="!store.showImg" :class="{ active: store.isRotate, multiply: store.launchApp }" class="card">
        <DarkSide />
        <CardHeader />

        <div :class="{ vanish: store.launchApp }" class="container">
            <div class="text_content">
                <span>{{ store.welcome }}&nbsp;</span>
                <span class="underscore">_</span>
            </div>
            <CardInput />
        </div>

    </section>

    <section v-else :class="{ active: store.isRotate, multiply: store.launchApp }" class="card">
        <picture @click="store.checkInputData()" class="imgContainer"><img :src=itemProp.url :alt=itemProp.alt>
        </picture>
    </section>
</template>

<style lang="scss" scoped>
.card {
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    text-shadow: 0 0 2px white;
    background: url('../../src/assets/img/smokeBG.jpg') no-repeat;
    background-size: cover;
    width: 350px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) perspective(1000px) rotate3d(0, 0, 0, 0deg);
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: all 0.4s ease-out;
    z-index: 0;
    border: 1px solid black;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1em;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    &.active {
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

    picture {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        opacity: 0;
        padding: 1em;
        animation: letTheShowBegin 1s forwards;
        animation-delay: 0.4s;

        @keyframes letTheShowBegin {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 100%;
            }
        }

        img {
            width: fit-content;
            max-width: 100%;
            max-height: 100%;
        }
    }
}

.multiply {
    left: 50%;

    &:hover {
        z-index: 10;
        top: 48%;
    }
}

@for $i from 1 through 8 {
    .multiply:nth-child(#{$i}) {
        left: 50%;
        animation: duplicate#{$i} 4s forwards;
        animation-delay: 0.4s;

        @keyframes duplicate#{$i} {
            0% {
                left: 50%;
                width: 350px;
            }

            20% {
                left: 8%;
                width: 200px;
            }

            30% {
                left: 8%;
                width: 200px;
            }

            100% {
                left: (12*$i)-4%;
                width: 200px;
            }
        }
    }
}
</style>