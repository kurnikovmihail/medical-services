<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center">
    <div class="max-w-5xl">
      <Header :is-mobile="isMobile" />
      <ServicesSection :is-mobile="isMobile" />
      <OtherServices :is-mobile="isMobile" />
      <InfoSection :is-mobile="isMobile" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import ServicesSection from './components/ServicesSection.vue';
import OtherServices from './components/OtherServices.vue';
import InfoSection from './components/InfoSection.vue';
import { useScreenWidth } from './composables/useScreenWidth';

// Получаем состояние isMobile из нашего composable
const { isMobile } = useScreenWidth();
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}
</style>