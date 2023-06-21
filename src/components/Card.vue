<script setup>
import CardHeader from './CardHeader.vue';
import CardInput from './CardInput.vue';
import DarkSide from './DarkSide.vue';
import { store } from '../stores/store';

// RECUPERE LES PROPS DU PARENT CARDVIEW POUR ITEM
const props = defineProps({
    itemProp: Object
})

</script>

<template>
    <section v-if="!store.showImg" class="card" :class="{ active: store.isRotate, multiply: store.launchApp }">
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

    <section v-else :class="{ multiply: store.launchApp, displayProject: itemProp.display }" class="card"
        @click="itemProp.display = !itemProp.display">
        <picture v-if="!itemProp.display" class="imgContainer"><img :src=itemProp.projectURL :alt=itemProp.alt>
        </picture>
        <article v-else>
            <h2>{{ itemProp.titre }}</h2>
            <div class="presentation">
                <div class="details">
                    <p v-for="detail in itemProp.details">{{ detail }}</p>
                </div>
                <picture class="projectImg">
                    <img v-for="imgURL in itemProp.url" :src=imgURL alt="Project">
                </picture>
            </div>
        </article>
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
    text-shadow: 0 0 1px white;
    background: url('../../src/assets/img/BG.png') no-repeat;
    background-size: cover;
    width: 375px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) perspective(1000px) rotate3d(0, 0, 0, 0deg);
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: box-shadow 0.4s ease-out, transform 0.6s ease-out, top 0.4s ease-out, width 0.4s ease-out, height 0.4s ease-out;
    z-index: 0;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 1em;

    &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 1);
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
        font-weight: 400;

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

    .imgContainer {
        position: relative;
        opacity: 0;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        animation: minify 1s forwards;
        animation-delay: 0.4s;
        border-radius: 1em;

        @keyframes minify {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 100%;
            }
        }

        img {
            height: 100%;
            position: absolute;
            animation: letTheShowBegin 15s infinite;


            @keyframes letTheShowBegin {
                0% {
                    left: 0%;
                }

                80% {
                    left: -300%;
                }

                100% {
                    left: 0%;
                }
            }
        }
    }
}

.multiply {
    left: 50%;

    &:hover {
        top: 49%;
    }
}

@for $i from 1 through 8 {
    .multiply:nth-child(#{$i}) {
        left: 50%;
        animation: duplicate#{$i} 4s forwards;
        animation-delay: 0.4s;

        @keyframes duplicate#{$i} {
            0% {
                left: 40%;
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

        .imgContainer {

            img {
                animation-delay: $i*0.5s;
            }
        }
    }
}

.displayProject {
    width: 100% !important;
    max-width: 1850px !important;
    left: 50% !important;
    height: 90%;
    z-index: 1000;

    &:hover {
        top: 50%;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    }

    article {
        padding: 2em;

        h2 {
            text-align: center;
            padding: 1em;
            font-weight: 400;
        }

        .presentation {
            display: flex;
            justify-content: space-around;
            align-items: center;

            .details {
                display: flex;
                flex-flow: column;
                justify-content: center;
                gap: 1em;
            }

            .projectImg {
                height: 700px;
                overflow-y: scroll;
                width: 40%;

                img {
                    width: 100%;
                    margin: 2em 0;
                }
            }
        }

    }

}
</style>