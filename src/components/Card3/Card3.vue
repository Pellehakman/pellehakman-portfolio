<script src="./Card3.ts" lang="ts"></script>

<template>
  <div class="card2-container py-12 bg-pink-900 bg-opacity-10">
    <div class="card2-text" v-motion-fade-visible-once :delay="300">
      <p>
        <span class="font-black">Creating lofi wireframes</span> that encapsulate your brand's
        essence, I prioritize your satisfaction before progressing to the
        <span class="font-black">hifi design phase</span>.
      </p>
    </div>
    <div class="flex my-auto py-12">
      <div class="lr-container">
        <div v-motion-slide-visible-once-left :delay="300" class="l-container">
          <div class="flex justify-center text-center w-96 p-12 lg-max:hidden">
            <p class="text-container text-right">
              Creating lofi wireframes that encapsulate your brand's essence, I prioritize your
              satisfaction before progressing to the hifi design phase.
            </p>
          </div>
        </div>
      </div>
      <div v-motion-fade-visible-once :delay="300">
        <div
          class="bg-pink-500 opacity-40 rounded-full sm-max:w-64 sm-max:h-64 animate-pulse w-[512px] h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
        ></div>
        <img class="hover:scale-105 transition-all duration-6000" :src="lr2" alt="" />
      </div>
      <div class="lr-container">
        <div v-motion-slide-visible-once-right :delay="300" class="r-container">
          <div class="flex justify-center items-center text-center w-96 p-12 lg-max:hidden">
            <p class="text-container text-left">
              Embodying the essence of your brand, the resulting designs will leave a lasting impact
              on your users.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card2-text">
      <p class="">
        Embodying the essence of <span class="font-black">your brand</span>, the resulting designs
        will leave a <span class="font-black">lasting impact</span> on your users.
      </p>
    </div>
  </div>
</template>

<style>
.animate-pulse {
  @apply duration-4000;
}
.card2-container {
  @apply flex flex-col justify-center min-h-screen overflow-x-hidden;
}
.lr-container {
  @apply w-full flex items-center relative;
}
.text-container {
  @apply text-white font-sofia text-xl;
}
.card2-text {
  @apply text-white h-16 flex items-center justify-center text-center font-extralight font-sofia px-4  sm-max:px-8 lg:hidden;
}
.l-container {
  @apply flex-grow flex items-center justify-end;
}
.r-container {
  @apply flex-grow flex items-center justify-start;
}
.img-size {
  @apply max-h-[80vh] sm-max:h-[450px];
}
.animate-spin {
  animation: spin 100s linear infinite;
}
</style>

<!-- .l-container {
  @apply absolute -right-10 flex items-center;
}
.r-container {
  @apply absolute -left-10  flex items-center;
} -->
