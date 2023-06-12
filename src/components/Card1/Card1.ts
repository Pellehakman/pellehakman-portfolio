import { defineComponent, ref } from "vue";
import clicking from '@/assets/svg/clicking.svg'

export default defineComponent({
    name: '_Hero',
    setup() {

        const expand = ref(false)
        function toNext(){
            console.log('hej')
            expand.value = true
        }


        return{
            clicking,
            toNext,
            expand

        }
    }

})