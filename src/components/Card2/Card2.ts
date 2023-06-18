import { defineComponent, ref } from 'vue'
import clicking from '@/assets/svg/clicking.svg'
import lf from '@/assets/pictures/lf 1.svg'
import hf from '@/assets/pictures/hf 1.svg'



export default defineComponent({
  name: 'Hero',
  setup() {
    return {
   
      clicking,
      lf,
      hf
    }
  }
})
