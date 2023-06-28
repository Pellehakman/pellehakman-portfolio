import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'progress_bar',
  setup() {
    const bar = ref<any>('bar')
    function myFunction() {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      bar.value.style.width = scrolled + '%'
    }
    onMounted(() => {
      window.addEventListener('scroll', myFunction)
    })
    return {
      bar
    }
  }
})
