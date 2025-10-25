import { ref, onMounted, onUnmounted } from 'vue';

export function useScreenWidth(breakpoint = 640) {
  const isMobile = ref(false);

  function checkScreenWidth() {
    isMobile.value = window.innerWidth < breakpoint;
  }

  onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkScreenWidth);
  });

  return { isMobile };
}