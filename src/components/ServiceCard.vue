<template>
  <div class="min-w-3xs relative overflow-hidden rounded-l shadow-md hover:shadow-xl transition-shadow duration-300 group h-64">
    <img
      :src="service.img"
      :alt="service.title"
      class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
    <div class="p-5">
      <div
        class="absolute inset-0 from-black/70 to-black/20 flex flex-col justify-between p-4"
        style="
          background: linear-gradient(
              0deg,
              rgba(41, 45, 58, 0.6),
              rgba(41, 45, 58, 0.6)
            ),
            linear-gradient(
              228.47deg,
              rgba(242, 101, 49, 0.4) 9.44%,
              rgba(0, 121, 52, 0.4) 89.9%
            );
        "
      >
        <h2 class="text-white font-semibold text-lg drop-shadow-md">
          {{ isMobile ? service.mobileTitle : service.title }}
        </h2>
        <p class="text-gray-100 text-sm leading-snug">
          {{ isMobile ? service.mobileText : service.text }}
        </p>
        <button class="self-start bg-orange-600 text-white font-medium px-5 py-1.5 rounded-full text-sm shadow-sm hover:bg-orange-500 transition-colors">
          {{ isMobile ? service.mobileButton : service.button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object,
  isMobile: Boolean,
});
</script>