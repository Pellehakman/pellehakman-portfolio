import { defineComponent, ref } from 'vue'
import leftPic from '@/assets/pictures/home-l.png'
import rightPic from '@/assets/pictures/home-r.png'

export default defineComponent({
  name: 'Hero',
  setup() {
    return {
      leftPic,
      rightPic
    }
  }
})
