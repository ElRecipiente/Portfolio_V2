<script setup>
import Card from '../components/Card.vue';
import { store } from '../stores/store';
import { watch } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();

watch(() => store.launchApp, () => {
  if (store.launchApp) {
    router.push({ path: "/mes-projets" })
    console.log('Activate !')
    setTimeout(() => {
      store.showImg = true
    }, 400);
  }
})
</script>

<template>
  <main>
    <Card />
  </main>
</template>

<style lang="scss" scoped>
main {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
