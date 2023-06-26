import { defineComponent, onMounted, ref } from 'vue'
import a from '@/assets/pictures/1.png'
import b from '@/assets/pictures/2.png'
import c from '@/assets/pictures/3.png'
import { useMotion } from '@vueuse/motion'

export default defineComponent({
  name: 'Code',
  setup() {
    const targetA = ref<HTMLElement>()
    const targetB = ref<HTMLElement>()
    const targetC = ref<HTMLElement>()
    const isTargetAVisible = ref(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isTargetAVisible.value = entry.isIntersecting;
      },
      { root: null, rootMargin: '0px', threshold: 0.5 } // Adjust the threshold as needed
    );

    // Register the observer on component mount
    onMounted(() => {
      observer.observe(targetA.value);
    });

    return {
      isTargetAVisible,
      targetA,
      targetB,
      targetC,
      a,
      b,
      c
    
    }
  }
})
