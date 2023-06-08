<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
// FONT //
@font-face {
  font-family: 'Raleway';
  src: local('Raleway'), url(./assets/fonts/Raleway);
}

// MINI RESET //
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}

body {
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  background: url('./assets/img/bg.jpg');
}
</style>
