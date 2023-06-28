<script src="./SiteCode.ts" lang="ts"></script>

<template>
  <div class="code-container relative items-center mx-auto flex flex-col bak1">
    <div class="">
      <section class="pt-24 pb-12 text-black flex flex-col justify-center w-full">
        <h1 class="font-staatliches text-8xl">CODE & <span class="text-white">DEVELOP</span></h1>
        <h2 class="text-xl font-sofia font-bold pt-4">
          Keywords in programming for me is, VUE 3 composition api, REACT, Firebase, auth, pinia.
          Tailwind, scss, css. Eslint, prettier, clean code.
        </h2>
      </section>
      <div class="max-w-6xl p-12 flex">
        <div class="w-full flex justify-start overflow-hidden relative">
          <div ref="targetA" v-motion="motionPhone1" class="absolute drop-shadow-2xl">
            <img class="w-[640px]" :src="a" />
          </div>
          <div ref="targetB" v-motion="motionPhone2" class="absolute drop-shadow-2xl">
            <img class="w-[640px]" :src="b" />
          </div>
          <div v-motion="motionPhone3" class="absolute drop-shadow-2xl">
            <img class="w-[640px]" :src="c" />
          </div>
        </div>
        <div class="flex">
          <div
            class="scroll-smooth shadow-2xl bg-stone-950 w-full ml-12 h-[768px] rounded-l-xl overflow-y-scroll break-words p-8"
          >
            <pre class="text-white text-xs">
            <code>
import { defineComponent, onMounted, ref } from 'vue'
import pic from '@/assets/pic.png'
import { Swiper, SwiperSlide } from 'swiper/vue'
import doubleChevronDown from '@/assets/doubleChevronDown.svg'
import type SwiperClass from 'swiper'
import { Pagination, Navigation } from 'swiper'
import $firebaseService from '@/services/FirebaseService'
import type { RecipeModel } from '@/models/RecipeModel'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import $helperRandom from '@/helpers/helperRandom'
import Recipe from '../Recipe/Recipe.vue'
import $helperFilter from '@/helpers/helperFilter'
import $helperResults from '@/helpers/helperResults'
import $edamam from '@/services/Edamam'

export default defineComponent({
  name: 'RecipeView',
  components: { Swiper, SwiperSlide, Recipe },
  setup() {
    onMounted(async () => {
      $edamam.SearchRecipes()
      const data = await $firebaseService.getRecipes()
      recipes.value = $helperResults.result(
        $helperFilter.diet($helperFilter.allergies(data.recipes))
      )

    })
    const show = ref(false)
    const recipes = ref()

    let swiperRef: SwiperClass | null = null
    const setSwiperRef = (swiper: SwiperClass) => {
      swiperRef = swiper
    }
    const clickSwipe = () => {
      swiperRef?.slideNext()
    }
    const readMore = ref(false)
    const onSlideChange = () => {
      readMore.value = false
    }
    const emitClose = (value: boolean) => {
      show.value = value
    }

    const handleRecipe = () => {
      show.value = !show.value
    }
    const swiperTextBase = ref(recipes)
    const activeInstructions = ref(false)
    const activeIngrediens = ref(false)

    return {
      onSlideChange,
      activeInstructions,
      activeIngrediens,
      show,
      doubleChevronDown,
      modules: [Pagination, Navigation],
      swiperTextBase,
      clickSwipe,
      setSwiperRef,
      pic,
      readMore,
      handleRecipe,
      emitClose
    }
  }
})

            </code>
          </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bak1 {
  background: linear-gradient(to bottom, #c74b2e 80%, #fffaf2 50%);
}
.animateIn {
  @apply transition-all duration-1000 translate-x-0 opacity-100;
}
.a {
  @apply duration-1000;
}
.b {
  @apply delay-500 duration-1000;
}
.c {
  @apply delay-1000  duration-1000;
}
.code-container {
  @apply flex h-full w-full bg-[#C74B2E]  overflow-hidden;
}
/* .middleCode-container{
  @apply 
} */
.card3-text {
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24;
}
</style>
./SiteCode.js./SiteCode.js
