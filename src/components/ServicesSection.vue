<template>
  <section class="mx-auto max-w-95 sm:max-w-full px-4 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-x-visible flex">
    <ServiceCard
      v-for="(item, i) in services"
      :key="i"
      :service="item"
      :is-mobile="isMobile"
    />
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';
import { services } from '../data/services.js';

defineProps({
  isMobile: Boolean,
});
</script>