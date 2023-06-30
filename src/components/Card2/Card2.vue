<script src="./Card2.ts" lang="ts"></script>

<template>
  <div class="card2-container">
    <div class="card2-text">
      <p>
        Learning the user <span class="font-black">needs</span> and
        <span class="font-black">desires</span>, I deliver a tailored product experience.
      </p>
    </div>
    <div class="flex">
      <div class="lr-container">
        <div v-motion-slide-visible-once-left :delay="300" class="l-container">
          <div class="flex justify-center text-center w-96 p-12 lg-max:hidden">
            <p class="text-container text-right">
              Learning the user needs and desires, I deliver a tailored product experience.
            </p>
          </div>
        </div>
      </div>
      <div v-motion-fade-visible-once :delay="900">
        <div
          class="bg-pink-500 opacity-50 rounded-full w-64 h-64 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"
        ></div>
        <img :src="lr" alt="" />
      </div>
      <div class="lr-container">
        <div v-motion-slide-visible-once-right :delay="900" class="r-container">
          <div class="flex justify-center items-center text-center w-96 p-12 lg-max:hidden">
            <p class="text-container text-left ">
              A product that integrates both user experience and interface design.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="card2-text">
      <p class="">
        A product that integrates both user <span class="font-black">experience</span> and interface
        <span class="font-black">design</span>.
      </p>
    </div>
  </div>
</template>

<style>
.card2-container {
  @apply flex flex-col justify-center min-h-screen;
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
