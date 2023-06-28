import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'smallCards',
  setup() {
    const expand = ref(false)
    function toNext() {
      console.log('hej')
      expand.value = !expand.value
    }

    return {

      toNext,
      expand
    }
  }
})
