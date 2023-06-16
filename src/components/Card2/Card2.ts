import { defineComponent, ref } from 'vue'
import clicking from '@/assets/svg/clicking.svg'
import lf from '@/assets/pictures/lf 1.svg'
import hf from '@/assets/pictures/hf 1.svg'
import { useMotion } from '@vueuse/motion'


export default defineComponent({
  name: 'Hero',
  setup() {

    const targetEl = ref()

    useMotion(targetEl, {
      initial: {
        opacity: 0 ,
        y:100
      },
      visibleOnce: {
        opacity: 0.1,
        y: 0
      }
    }  )
    return {
      targetEl,
      clicking,
      lf,
      hf
    }
  }
})
