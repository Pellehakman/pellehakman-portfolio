import Card1 from "@/components/Card1/Card1.vue";
import Card2 from "@/components/Card2/Card2.vue";
import siteHeader from "@/components/siteHeader/siteHeader.vue";
import siteHero from "@/components/siteHero/siteHero.vue";
import siteNav from "@/components/siteNav/siteNav.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { siteNav, siteHeader, siteHero, Card1, Card2 },
    setup() {



        return{
            
        }
    }

   
})