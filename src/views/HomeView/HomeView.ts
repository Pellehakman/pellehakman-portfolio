import smallCards from '@/components/smallCards/smallCards.vue'
import Card2 from '@/components/Card2/Card2.vue'
import Card3 from '@/components/Card3/Card3.vue'

import siteHeader from '@/components/siteHeader/siteHeader.vue'
import siteHero from '@/components/siteHero/siteHero.vue'
import siteNav from '@/components/siteNav/siteNav.vue'
import { defineComponent, onMounted } from 'vue'
import progressBar from '@/components/progressBar/progressBar.vue'
import SiteCode from '@/components/SiteCode/SiteCode.vue'
import DesignSystem from '@/components/DesignSystem/DesignSystem.vue'
import About from '@/components/About/About.vue'
import siteFooter from '@/components/siteFooter/siteFooter.vue'

export default defineComponent({
  components: {
    siteNav,
    siteHeader,
    siteHero,
    smallCards,
    Card2,
    Card3,
    SiteCode,
    progressBar,
    DesignSystem,
    About,
    siteFooter
  },
  setup() {
    // function myFunction() {
    //   const winScroll = window.pageYOffset || document.documentElement.scrollTop
    //   const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    //   const scrolled = (winScroll / height) * 100
    //   document.getElementById('myBar').style.width = scrolled + '%'
    // }
    // onMounted(() => {
    //   window.addEventListener('scroll', myFunction)
    // })
    return {}
  }
})
