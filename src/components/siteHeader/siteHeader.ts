import { computed, defineComponent, ref } from 'vue'
import man from '@/assets/svg/man-1.svg'
import {useMouseInElement} from '@vueuse/core'
export default defineComponent({
  name: 'Hero',
  setup() {
    const expand = ref(false)
    const target = ref(null)

    const {elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
    const cardTransform = computed(() => {
      const MAX_ROTATION = 6
      const rX = (
        MAX_ROTATION / 2 - (elementY.value /elementHeight.value) * MAX_ROTATION).toFixed(2)
        const rY = (
          MAX_ROTATION / 2 - (elementX.value /elementWidth.value) * MAX_ROTATION).toFixed(2)

          return `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    })

  //  :style="{transform: cardTransform, transition: ' ease-out'}" ref="target" 


    function toNext() {
      console.log('hej')
      expand.value = !expand.value
    }

    return {
      cardTransform,
      man,
      target,
      toNext,
      expand
    }
  }
})
