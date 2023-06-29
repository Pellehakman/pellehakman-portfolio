<script src="./Card3.ts" lang="ts"></script>

<template>
  <div class="card3-container relative">
    <div class="middle-container">
      <div class="flex items-center">
        <p v-motion-slide-visible-once-bottom class="card3-text" :delay="700">
          Creating lofi wireframes that encapsulate your brand's essence, I prioritize your
          satisfaction before progressing to the hifi design phase.
        </p>

        <div class="h-full flex items-center" v-motion-slide-visible-once-top :delay="400">
          <img class="w-[768px] sm-max:px-2" :src="shoe" />
          <div
            class="bg-pink-700 opacity-40 w-96 h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
          />
        </div>

        <p v-motion-slide-visible-once-bottom class="card3-text" :delay="600">
          Embodying the essence of your brand, the resulting designs will leave a lasting impact on
          your users.
        </p>
      </div>
      <div class="card3b-text">
        <p>
          Creating lofi wireframes that encapsulate your brand's essence, I prioritize your
          satisfaction before progressing to the hifi design phase. Embodying the essence of your
          brand, the resulting designs will leave a lasting impact on your users.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.card3-container {
  @apply flex h-screen flex-col ;
}
.card3b-text {
  @apply text-white  mt-12 flex items-center justify-center text-center font-extralight font-sofia sm:hidden px-4;
}
.middle-container {
  @apply w-full h-full flex justify-center items-center flex-col;
}
.card3-text {
  @apply h-full w-80 flex sm-max:hidden items-end text-white font-sofia text-xl px-4;
}
</style>
