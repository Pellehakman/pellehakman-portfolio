import { defineComponent, onMounted, ref } from 'vue'
import a from '@/assets/pictures/1.png'
import b from '@/assets/pictures/2.png'
import c from '@/assets/pictures/3.png'
import { useMotion } from '@vueuse/motion'
import simpleParallax from 'simple-parallax-js';
import { motionPhone1, motionPhone2, motionPhone3 } from '@/motions/motions'
import DesignSystem from '../DesignSystem/DesignSystem.vue'

export default defineComponent({
  name: 'Code',
  components: { DesignSystem },
  setup() {
    const targetA = ref<HTMLElement>()
    const targetB = ref<HTMLElement>()
    const targetC = ref<HTMLElement>()


    return {
      motionPhone1,
      motionPhone2,
      motionPhone3,
      targetA,
      targetB,
      targetC,
      a,
      b,
      c
    
    }
  }
})
