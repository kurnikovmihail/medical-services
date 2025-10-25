<template>
  <header class="py-8 px-4">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
      {{ isMobile ? "Мед. услуги" : "Медицинские услуги" }}
    </h1>
  </header>
</template>

<script setup>
defineProps({
  isMobile: Boolean,
});
</script>