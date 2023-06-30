<script src="./DesignSystem.ts" lang="ts"></script>

<template>
  <div class="design-container relative flex flex-col">
    <div class="max-w-6xl mx-auto py-24 px-4">
      <section class="pb-12 text-black flex flex-col justify-center w-full">
        <h1 class="font-staatliches text-8xl sm-max:text-5xl text-black sm-max:px-8 px-4">
          DESIGN SYSTEM
        </h1>
        <h2 class="h2-standard sm-max:px-8 px-4">
          Working along side a design system is key to having a design that stays consistent and
          readable towards developers and customers. From figma to zero height.
        </h2>
      </section>
      <section class="flex w-full flex-col items-start px-8">
        <div class="flex items-start w-full">
          <img class="w-[44px] mr-4 p-1" :src="figma" alt="" />
          <div class="">
            <h2 class="font-staatliches text-4xl">FIGMA</h2>
            <p class="font-sofia text-xl sm-max:text-base mb-4">
              Creating a design from he smallest atoms to full pages in figma, meeting your demands
              and expectations from a feeling to detailed data about your product.
            </p>
          </div>
        </div>
        <div class="w-full">
          <div class="flex w-full justify-end sm-max:justify-center">
            <button
              @click="openOverlay"
              class="btn-style bg-blue-400 hover:bg-blue-300 active:bg-blue-500"
            >
              Take me there
            </button>
          </div>
        </div>
      </section>

      <section class="flex w-full flex-col items-start px-8 mt-12">
        <div class="flex items-start w-full">
          <img class="w-[44px] mr-4 p-1" :src="zeroheight" alt="" />
          <div class="">
            <h2 class="font-staatliches text-4xl">ZEROHEIGHT</h2>
            <p class="font-sofia text-xl sm-max:text-base mb-4">
              Maintaining and documenting a design system for your product, ensuring consistency and
              collaboration across the design team and beyond.
            </p>
          </div>
        </div>
        <div class="w-full">
          <div class="flex w-full justify-end sm-max:justify-center">
            <button
              @click="openOverlay"
              class="btn-style bg-pink-500 hover:bg-pink-400 active:bg-pink-600"
            >
              Take me there
            </button>
          </div>
        </div>
      </section>
    </div>

    <div class="overlay select-none" v-if="showOverlay">
      <div class="overlay-content flex items-center justify-center h-full relative">
        <font-awesome-icon
          @click="closeOverlay"
          class="text-black absolute right-0 top-0 p-4 cursor-pointer"
          icon="fa-solid fa-xmark"
        />
        <p class="message text-black text-xl font-sofia">Sorry, the link is not active yet.</p>
      </div>
    </div>
  </div>
</template>

<style>
.btn-style {
  @apply text-white font-sofia py-4 px-6 rounded-md sm-max:text-base border-2 border-white active:border-stone-300;
}
.design-container {
  position: relative;
}

.overlay {
  @apply flex items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full h-full bg-stone-950 bg-opacity-40;
}

.overlay-content {
  @apply bg-white sm-max:w-[90%]  w-1/2 h-1/4;
}

.design-container {
  @apply h-full bg-[#fffaf2];
}
</style>
