import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'progress_bar',
  setup() {
    function myFunction() {
      const winScroll = window.pageYOffset || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      document.getElementById('myBar').style.width = scrolled + '%'
    }
    onMounted(() => {
      window.addEventListener('scroll', myFunction)
    })
    return {}
  }
})
