<template>
  <div
    class="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center"
  >
    <div class="max-w-5xl">
      <!-- Заголовок -->
      <header class="py-8 px-4">
        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
          {{ isMobile ? "Мед. услуги" : "Медицинские услуги" }}
        </h1>
      </header>
      <!-- mx-auto px-4 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-x-visible flex -->
      <!-- Блок с тремя карточками -->
      <section
        class="mx-auto max-w-95 sm:max-w-full px-4 sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-x-visible flex"
      >
        <div
          v-for="(item, i) in services"
          :key="i"
          class="min-w-3xs relative overflow-hidden rounded-l shadow-md hover:shadow-xl transition-shadow duration-300 group h-64"
        >
          <img
            :src="item.img"
            alt=""
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
                {{ isMobile ? item.mobileTitle : item.title }}
              </h2>
              <p class="text-gray-100 text-sm leading-snug">
                {{ isMobile ? item.mobileText : item.text }}
              </p>
              <button
                class="self-start bg-orange-600 text-white font-medium px-5 py-1.5 rounded-full text-sm shadow-sm hover:bg-orange-500 transition-colors"
              >
                {{ isMobile ? item.mobileButton : item.button }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Блок с текстом -->
      <section class="max-w-5xl mt-10 px-4">
        <p class="text-xs font-bold mb-3 text-gray-400">
          ДРУГИЕ МЕДИЦИНСКИЕ УСЛУГИ
        </p>
        <p class="text-gray-700 leading-relaxed text-sm sm:text-base">
          <span>
            {{ isMobile ? "" : "УЗИ • " }}УЗИ дома –
            <span class="text-orange-600">бесплатный выезд</span></span
          >
          <br v-if="isMobile" />
          <span>
            {{ isMobile ? "" : "• ЭКГ • " }}ЭКГ дома –
            <span class="text-orange-600">бесплатный выезд</span><br
          /></span>
          <span v-if="isMobile">Кольпоскопия <br /></span>
          <span
            >{{
              isMobile
                ? "Лечение Сургитрон"
                : "Лечение Сургитрон • Кольпоскопия"
            }}<br
          /></span>
          <a href="#" class="text-green-800 font-bold hover:underline">
            {{
              isMobile
                ? "Все медуслуги Гемотест (35) →"
                : "Все медицинские услуги Гемотест (35) →"
            }}
          </a>
        </p>
      </section>

      <!-- Пять чередующихся блоков -->
      <section class="mx-auto mt-10 px-4">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 rounded overflow-hidden"
        >
          <div
            v-for="(item, i) in docs"
            :key="i"
            :class="[
              'flex items-center sm:flex-col text-left sm:text-center justify-start py-8 px-4 transition-colors',
              i % 2 === 0 ? 'bg-[#fff7d6]' : 'bg-[#fffcef]',
            ]"
          >
            <!-- картинка слева на мобилке, сверху на sm+ -->
            <img
              :src="item.img"
              alt=""
              class="w-16 h-16 sm:w-16 sm:h-16 mb-0 sm:mb-3 mr-4 sm:mr-0 rounded-full object-cover"
            />

            <!-- текст -->
            <div class="flex-1">
              <p
                v-if="!isMobile"
                class="text-green-800 font-semibold text-base sm:text-lg leading-tight mb-1"
              >
                {{ item.title }}
              </p>
              <p
                v-if="isMobile"
                class="text-green-800 font-semibold text-base sm:text-lg leading-tight mb-1"
              >
                {{ item.mobileTitle }}
              </p>
              <p v-if="!isMobile" class="text-sm text-gray-800">
                {{ item.text }}
              </p>
              <p v-if="isMobile" class="text-sm text-gray-800">
                {{ item.mobileText }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import grandMa from "./assets/grandMa.png";
import wals from "./assets/wals.png";
import hands from "./assets/hands.png";

import rerb from "./assets/rerb.png";
import sapports from "./assets/sapports.png";
import map from "./assets/map.png";
import sales from "./assets/sales.png";
import brain from "./assets/brain.png";
const services = [
  {
    img: grandMa,
    title: "Анализы дома",
    text: "Бесплатный выезд. Для детей и взрослых. Удобно и быстро.",
    button: "Бесплатно",
    mobileButton: "Бесплатно",
    mobileTitle: "Анализы дома",
    mobileText: "Бесплатный выезд. Для детей и взрослых.",
  },
  {
    img: wals,
    title: "МРТ",
    text: "Запись на магнитно-резонансную томографию.8 видов скрининга.",
    button: "От 1 690 Р",
    mobileButton: "От 1 690 Р",
    mobileTitle: "МРТ",
    mobileText: "Запись на магнитно- резонансную томографию. 8 видов скрининга",
  },
  {
    img: hands,
    title: "Срочные анализы CITO",
    text: "Быстрая диагностика в день обращения. Более 30 видов анализов.",
    button: "Результаты в 14:00",
    mobileButton: "Найти отделение",
    mobileTitle: "Срочные анализы CITO",
    mobileText: "Быстрая диагностика в день обращения. Более 30 видов анализов",
  },
];

const docs = [
  {
    img: rerb,
    title: "Справка в налоговую (ФНС)",
    text: "для оформления налогового вычета",
    mobileTitle: "Справка в налоговую",
    mobileText: "для оформления налогового вычета",
  },
  {
    img: sapports,
    title: "Бесплатная консультация",
    text: "врача Гемотест по телефону",
    mobileTitle: "Бесплатная консультация врача",
    mobileText: "по телефону",
  },
  {
    img: map,
    title: "Расшифровка результатов",
    text: "из других лабораторий",
    mobileTitle: "Расшифровка результатов",
    mobileText: "из других лабораторий",
  },
  {
    img: sales,
    title: "Бонусная программа",
    text: "«Копите на здоровье»",
    mobileTitle: "Бонусы",
    mobileText: "«Копите на здоровье»",
  },
  {
    img: brain,
    title: "Второе мнение в онкологии",
    text: "от экспертов мирового уровня",
    mobileTitle: "Второе мнение",
    mobileText: "от онкоэкспертов мирового уровня ",
  },
];

import { ref, onMounted, onUnmounted } from "vue";

const isMobile = ref(false);

function checkScreenWidth() {
  isMobile.value = window.innerWidth < 640; // порог для "мобилки"
}

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenWidth);
});
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}
</style>
