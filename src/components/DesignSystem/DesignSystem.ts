import { defineComponent, ref } from 'vue'
import figma from '@/assets/svg/figma.svg'
import zeroheight from '@/assets/svg/zeroheight.svg'

export default defineComponent({
  name: 'DesignSystem',
  setup() {
    const showOverlay = ref(false)

    const closeOverlay = () => {
      showOverlay.value = false
    }

    const openOverlay = () => {
      console.log('hej')
      showOverlay.value = true
    }
    return {
      showOverlay,
      closeOverlay,
      openOverlay,
      zeroheight,
      figma
    }
  }
})
