<script src="./SiteCode.ts" lang="ts"></script>

<template>
  <div class="code-container bak1">
    <div class="max-w-6xl mx-auto flex flex-col sm-max:py-8 py-12 pt-24 relative">
      <section class="text-white flex flex-col justify-start relative">
        <h1 class="font-staatliches text-8xl sm-max:text-5xl text-black px-4">
          CODE & <span class="text-white">DEVELOP</span>
        </h1>

        <h2 class="text-xl font-sofia font-thin py-4 sm-max:text-base px-4">
          Keywords in programming for me is, VUE 3 composition api, REACT, Firebase, auth, pinia.
          Tailwind, scss, css. Eslint, prettier, clean code.
        </h2>
      </section>
      <div class="hej">
        <div class="absolute inset-0">
          <img
            src="@/assets/pictures/1.png"
            alt="Image 1"
            class="h-full object-cover max-w-[800px] sm-max:h-3/4 drop-shadow-2x"
          />
        </div>

        <div class="absolute inset-0">
          <img
            src="@/assets/pictures/2.png"
            alt="Image 2"
            class="h-full object-cover max-w-[800px] sm-max:h-3/4 drop-shadow-2x"
          />
        </div>

        <div class="absolute inset-0">
          <img
            src="@/assets/pictures/3.png"
            alt="Image 3"
            class="h-full object-cover max-w-[800px] sm-max:h-3/4 drop-shadow-2x"
          />
        </div>

        <div class="absolute top-0 w-1/3 h-full right-0 z-40 sm-max:w-3/4 drop-shadow-2xl">
          <div
            class="w-full bg-pink-800 h-12 flex justify-between rounded-t-md items-center pl-4 font-sofia text-white"
          >
            <h3>code example</h3>
            <button @click="close" class="rounded-full p-4 flex justify-center items-center">
              <font-awesome-icon class="flex items-center" icon="fa-solid fa-xmark" />
            </button>
          </div>
          <pre
            :class="{ 'opacity-0': isClosed }"
            class="text-white p-8 overflow-y-scroll h-full bg-stone-950 transition-all"
          ><code class="text-xs ">import { defineComponent, onMounted, ref } from 'vue'
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
      // recipes.value = $helperRandom.shuffle(data.recipes)
      recipes.value = $helperResults.result(
        $helperFilter.diet($helperFilter.allergies(data.recipes))
      )
      // recipes.value = $helperFilter.allergies(data.recipes)
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
</template>
<!-- <div
            class="w-full bg-pink-800 h-12 flex justify-between items-center pl-4 font-sofia text-white"
          >
            <h3>code example</h3>
            <button class="rounded-full p-4 flex justify-center items-center">
              <font-awesome-icon class="flex items-center" icon="fa-solid fa-xmark" />
            </button>
          </div> -->
<style>
.hej {
  @apply h-[1024px] relative flex justify-center items-center;
}
.b1 {
  background-image: url('@/assets/pictures/1.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 800px auto;

  z-index: 1; /* Adjust the z-index to control the overlapping */
}

.b2 {
  background-image: url('@/assets/pictures/2.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 800px auto;

  z-index: 2; /* Adjust the z-index to control the overlapping */
}

.b3 {
  background-image: url('@/assets/pictures/3.png');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 800px auto;

  z-index: 3; /* Adjust the z-index to control the overlapping */
}
pre {
  white-space: pre-wrap; /* Since CSS 2.1 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
}
.code-container {
  @apply relative flex flex-col min-h-screen;
}

.bak1 {
  background: linear-gradient(to bottom, #c74b2e 70%, #fffaf2 30%);
  /* background: #c74b2e; */
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

/* .middleCode-container{
  @apply 
} */
.code-text {
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24;
}
</style>
./SiteCode.js./SiteCode.js
