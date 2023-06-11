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
  src: url(./assets/fonts/Raleway/Raleway-VariableFont_wght.ttf),
    url(./assets/fonts/Raleway/Raleway-Italic-VariableFont_wght.ttf),
    url(./assets/fonts/Raleway/static),
    url(./assets/fonts/Raleway/static/Raleway-Black.ttf),
    url(./assets/fonts/Raleway/static/Raleway-BlackItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Bold.ttf),
    url(./assets/fonts/Raleway/static/Raleway-BoldItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-ExtraBold.ttf),
    url(./assets/fonts/Raleway/static/Raleway-ExtraBoldItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-ExtraLight.ttf),
    url(./assets/fonts/Raleway/static/Raleway-ExtraLightItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Italic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Light.ttf),
    url(./assets/fonts/Raleway/static/Raleway-LightItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Medium.ttf),
    url(./assets/fonts/Raleway/static/Raleway-MediumItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Regular.ttf),
    url(./assets/fonts/Raleway/static/Raleway-SemiBold.ttf),
    url(./assets/fonts/Raleway/static/Raleway-SemiBoldItalic.ttf),
    url(./assets/fonts/Raleway/static/Raleway-Thin.ttf),
    url(./assets/fonts/Raleway/static/Raleway-ThinItalic.ttf);
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
