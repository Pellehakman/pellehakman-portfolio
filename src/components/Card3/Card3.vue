<script src="./Card3.ts" lang="ts"></script>

<template>
  <div class="card3-container relative">
    <div class="middle-container">
      <p v-motion-slide-visible-bottom class="card3-text" :delay="700">
        Creating lofi wireframes that encapsulate your brand's essence, I prioritize your
        satisfaction before progressing to the hifi design phase.
      </p>
      <div v-motion-slide-visible-top :delay="400">
        <img class="w-[768px]" :src="shoe" />
        <div
          class="bg-pink-700 opacity-80 w-96 h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
        />
      </div>
      <p v-motion-slide-visible-bottom class="card3-text" :delay="600">
        Embodying the essence of your brand, the resulting designs will leave a lasting impact on
        your users.
      </p>
    </div>
  </div>
</template>

<style>
.card3-container {
  @apply flex h-screen  overflow-hidden;
}
.middle-container {
  @apply w-full flex justify-center items-center;
}
.card3-text {
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24;
}
</style>
