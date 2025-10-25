<template>
  <section class="max-w-5xl mt-10 px-4">
    <p class="text-xs font-bold mb-3 text-gray-400">
      ДРУГИЕ МЕДИЦИНСКИЕ УСЛУГИ
    </p>
    <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
      <span>
        {{ isMobile ? "" : "УЗИ • " }}УЗИ дома –
        <span class="text-orange-600">бесплатный выезд</span>
      </span>
      <br v-if="isMobile" />
      <span>
        {{ isMobile ? "" : "• ЭКГ • " }}ЭКГ дома –
        <span class="text-orange-600">бесплатный выезд</span><br />
      </span>
      <span v-if="isMobile">Кольпоскопия <br /></span>
      <span>
        {{ isMobile ? "Лечение Сургитрон" : "Лечение Сургитрон • Кольпоскопия" }}<br />
      </span>
      <a href="#" class="text-green-800 font-bold hover:underline">
        {{ isMobile ? "Все медуслуги Гемотест (35) →" : "Все медицинские услуги Гемотест (35) →" }}
      </a>
    </p>
  </section>
</template>

<script setup>
defineProps({
  isMobile: Boolean,
});
</script>