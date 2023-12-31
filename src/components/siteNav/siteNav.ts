import { defineComponent } from 'vue'
import { ref, onMounted } from 'vue'
import progressBar from '../progressBar/progressBar.vue'

export default defineComponent({
  name: 'SiteNav',
  components: { progressBar },
  setup() {
    const prevScrollPos = ref(window.pageYOffset)
    const navbarRef = ref<any>(null)

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset
      if (prevScrollPos.value > currentScrollPos) {
        navbarRef.value.style.top = '0'
      } else {
        navbarRef.value.style.top = '-80px'
      }
      prevScrollPos.value = currentScrollPos
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    const end = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }

    return {
      end,
      navbarRef
    }
  }
})
