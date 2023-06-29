import { defineComponent, ref } from 'vue'
import a from '@/assets/pictures/1.png'
import b from '@/assets/pictures/2.png'
import c from '@/assets/pictures/3.png'
import recipe from '@/assets/pictures/recipe.png'

import { motionPhone1, motionPhone2, motionPhone3 } from '@/motions/motions'
import DesignSystem from '../DesignSystem/DesignSystem.vue'

export default defineComponent({
  name: 'SiteCode',
  components: { DesignSystem },
  setup() {
    const targetA = ref<HTMLElement>()
    const targetB = ref<HTMLElement>()
    const targetC = ref<HTMLElement>()
    const isClosed = ref(false)

    function close() {
      isClosed.value = !isClosed.value
    }

    return {
      close,
      isClosed,
      motionPhone1,
      motionPhone2,
      motionPhone3,
      targetA,
      targetB,
      targetC,
      recipe,
      a,
      b,
      c
    }
  }
})
