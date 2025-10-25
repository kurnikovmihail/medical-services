<template>
  <div
    :class="[
      'flex items-center sm:flex-col text-left sm:text-center justify-start py-8 px-4 transition-colors',
      index % 2 === 0 ? 'bg-[#fff7d6]' : 'bg-[#fffcef]',
    ]"
  >
    <img
      :src="doc.img"
      :alt="doc.title"
      class="w-16 h-16 sm:w-16 sm:h-16 mb-0 sm:mb-3 mr-4 sm:mr-0 rounded-full object-cover"
    />
    <div class="flex-1">
      <p class="text-green-800 font-semibold text-base sm:text-lg leading-tight mb-1">
        {{ isMobile ? doc.mobileTitle : doc.title }}
      </p>
      <p class="text-sm text-gray-800">
        {{ isMobile ? doc.mobileText : doc.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  doc: Object,
  index: Number,
  isMobile: Boolean,
});
</script>