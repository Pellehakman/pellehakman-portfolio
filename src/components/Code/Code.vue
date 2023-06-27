<script src="./Code.ts" lang="ts"></script>

<template>
  <div class="code-container relative flex flex-col">
    <section class="py-24 text-black flex flex-col justify-center">
      <h1 class="font-staatliches text-8xl">
        CODE & <span class=" text-white">DEVELOP</span>
      </h1>
      <h2 class=" text-xl font-sofia font-bold pt-4 pr-56 ">
        Keywords in programming for me is, VUE 3 composition api, REACT, Firebase, auth, store. Tailwind, scss, css. Eslint, prettier, clean code.
      </h2>
    </section>
    <div class="w-full h-full flex">
      <div class="middle-container relative bg-slate-500">
        <div
          ref="targetA"
          v-motion="motionPhone1"
          class="absolute"
        >
          <img

            class="w-[640px]"
            :src="a"
          >
        </div>
        <div
          ref="targetB"
          v-motion="motionPhone2"

          class="absolute"
        >
          <img

            class="w-[640px]"
            :src="b"
          >
        </div>
        <div
          v-motion="motionPhone3"
          class="absolute"
        >
          <img

            class="w-[640px]"
            :src="c"
          >
        </div>
      </div>
      <div class="flex items-center ">
        <div class=" bg-stone-950 w-[512px] h-[640px] rounded-l-3xl overflow-y-scroll p-12">
          <span class="text-white font-sofia font-extralight">
            <span class="text-pink-700">import</span> { <span class="text-blue-200">defineComponent</span>, <span class="text-blue-200">onMounted</span> } <span class="text-pink-700">from</span> <span class=" text-amber-800">'vue'</span> <br>
            <span class="text-pink-700">export default</span> <span class="text-yellow-200">defineComponent</span> <span class="text-yellow-400">(</span><span class="text-pink-700">{</span> <br>
            <span class="text-blue-200">name:</span>

            'RecipeView',
            components: { Swiper, SwiperSlide, Recipe },
            setup() {

            onMounted(async () => {
            const data = await $firebaseService.getRecipes()
            recipes.value = $helperResults.result(
            $helperFilter.diet($helperFilter.allergies(data.recipes))
            )
            })
            const show = ref(false)
            const recipes = ref<RecipeModel[]>()
              let swiperRef: SwiperClass | null = null
              const setSwiperRef = (swiper: SwiperClass) => {
              swiperRef = swiper
              }
              const clickSwipe () {
              const clickSwipe = () => {
              swiperRef?.slideNext()
              }</recipemodel[]></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.animateIn{
  @apply  transition-all duration-1000 translate-x-0 opacity-100
}
.a {
  @apply  duration-1000
}
.b {
  @apply  delay-500 duration-1000
}
.c {
  @apply   delay-1000  duration-1000
}
.code-container{
  @apply flex h-screen bg-[#C74B2E]  overflow-hidden
}
.middle-container{
  @apply w-full h-full flex justify-start pl-14 items-center relative
}
.card3-text{
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24
}

</style>
