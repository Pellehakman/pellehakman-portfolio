import smallCards from '@/components/smallCards/smallCards.vue'
import Card2 from '@/components/Card2/Card2.vue'
import Card3 from '@/components/Card3/Card3.vue'

import siteHeader from '@/components/siteHeader/siteHeader.vue'
import siteHero from '@/components/siteHero/siteHero.vue'
import siteNav from '@/components/siteNav/siteNav.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { siteNav, siteHeader, siteHero, smallCards, Card2, Card3 },
  setup() {
    return {}
  }
})
