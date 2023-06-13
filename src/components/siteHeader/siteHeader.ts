import { defineComponent, ref } from "vue";
import man from '@/assets/svg/man-1.svg'

export default defineComponent({
    name: '_Hero',
    setup() {

        const expand = ref(false)
        function toNext(){
            console.log('hej')
            expand.value =! expand.value
        }


        return{
            man,
            toNext,
            expand

        }
    }

})