import { defineComponent, onMounted, ref } from 'vue'
import juno from '@/assets/svg/juno.png'

export default defineComponent({
  name: 'About',
  setup() {
    function restart() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    return {
      restart,
      juno
    }
  }
})
