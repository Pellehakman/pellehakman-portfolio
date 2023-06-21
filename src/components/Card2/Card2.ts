import { defineComponent, ref } from 'vue'
import clicking from '@/assets/svg/clicking.svg'
import leftPic from '@/assets/pictures/home-l.png'
import rightPic from '@/assets/pictures/home-r.png'



export default defineComponent({
  name: 'Hero',
  setup() {
    return {
   
      clicking,
      leftPic,
      rightPic
    }
  }
})
