<script src="./DesignSystem.ts" lang="ts"></script>

<template>
  <div class="design-container relative flex flex-col">
    <div class="max-w-6xl mx-auto py-24  px-4">
      <section class="pb-12 text-black flex flex-col justify-center w-full">
        <h1 class="font-staatliches text-8xl sm-max:text-5xl text-black sm-max:px-8 px-4">
          DESIGN SYSTEM
        </h1>
        <h2 class="text-xl font-sofia font-light py-4 sm-max:text-base sm-max:px-8 px-4">
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
              class="bg-blue-300 rounded-md shadow-lg px-12 py-3 font-sofia font-bold text-white"
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
              class="bg-pink-500 rounded-md shadow-lg px-12 py-3 font-sofia font-bold text-white"
            >
              Take me there
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.design-container {
  @apply h-full bg-[#fffaf2];
}
</style>
