<template>
  <section class="mx-auto mt-10 px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded overflow-hidden">
      <InfoBlock
        v-for="(item, i) in docs"
        :key="i"
        :doc="item"
        :index="i"
        :is-mobile="isMobile"
      />
    </div>
  </section>
</template>

<script setup>
import InfoBlock from './InfoBlock.vue';
import { docs } from '../data/docs.js';

defineProps({
  isMobile: Boolean,
});
</script>