<script setup>
import CardHeader from './CardHeader.vue';
import CardInput from './CardInput.vue';
import DarkSide from './DarkSide.vue';
import { store } from '../stores/store';
import { useRouter } from "vue-router"
import { watch } from 'vue';
const router = useRouter()

watch(() => store.launchApp, () => {
    if (store.launchApp) {
        router.push({ path: "/caroussel" })
        console.log('Active')
    } else {
        router.push({ path: "/" })
        console.log('Inactive')
    }
})

</script>

<template>
    <section :class="{ active: store.isRotate, multiply: store.launchApp }" class="card">
        <DarkSide />
        <CardHeader />

        <div :class="{ active: store.launchApp }" class="container">
            <div class="text_content">
                <span>{{ store.welcome }}&nbsp;</span>
                <span class="underscore">_</span>
            </div>
            <CardInput />
        </div>

        <div :class="{ active: store.launchApp }" class="containerActive">

        </div>

    </section>
    <!-- Pour la gestion du portfolio -->
    <!-- <section v-else :class="{ active: store.isRotate, multiply: store.launchApp }" class="card">
                                                                                                                    <img src="" alt="">
                                                                                                                </section> -->
</template>

<style lang="scss" scoped>
.card {
    position: absolute;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 360px;
    height: 600px;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%) perspective(1000px) rotate3d(0, 0, 0, 0deg);
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: all 0.4s ease-out;
    z-index: 0;

    &:hover {
        box-shadow: 0 0 16px white;
    }

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

    .containerActive {
        display: none;
        width: 100%;
        height: 100%;
        background-image: url('../assets/img/portrait_default.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        &.active {
            display: flex;
        }
    }
}

.multiply {
    left: 50%;

    &:hover {
        z-index: 10;
        top: 42.5%;
    }
}

@for $i from 1 through 6 {
    .multiply:nth-child(#{$i}) {
        left: 50%;
        animation: duplicate#{$i} 4s forwards;
        animation-delay: 0.4s;

        @keyframes duplicate#{$i} {
            0% {
                left: 50%;
            }

            20% {
                left: 14%;
            }

            30% {
                left: 14%;
            }

            100% {
                left: 14% *$i;
            }
        }
    }



}
</style>