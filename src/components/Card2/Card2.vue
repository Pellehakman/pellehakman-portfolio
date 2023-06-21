<script src="./Card2.ts" lang="ts"></script>

<template>
  <div class="h-screen  flex justify-center items-center snap-center ">
    <div class="  relative w-full justify-center flex h-full ">
      <div class="flex justify-center relative h-screen w-screen ">
        <div
          v-motion-slide-visible-left
          class="flex  items-center absolute pr-96"
        >
          <div

            class="text-white w-64 font-sofia text-xl font-bold  p-8 "
          >
            Learning the user needs and desires, I deliver a tailored product experience.
          </div>
          <img

            class="  w-64 text-white "
            :src="leftPic"
            alt=""
          >
        </div>

        <div
          v-motion-slide-visible-right
          :delay="300"
          class="flex mt-32 absolute items-center pl-96"
        >
          <img

            class="w-64 "
            :src="rightPic"
            alt=""
          >
          <div

            class="text-white w-64 font-sofia text-xl font-bold  p-8"
          >
            A product that integrates both user experience and interface design.
          </div>
        </div>
        <div class="h-4/6 w-96 bg-pink-950 absolute rounded-full -z-10 blur-3xl animate-spin " />
        <div class=" h-4/6 w-2/4 bg-yellow-900 opacity-40  animate-spin  rounded-full absolute bottom-0 -z-10 blur-3xl" />
      </div>

    <!-- <h1

      class="snap-center text-white font-staatliches text-7xl"
    >
      2. Nice, Let's fire this portfolio up!
    </h1> -->
    </div>
  </div>
</template>

<style>
.animate-spin {
    animation: spin 100s linear infinite;
}

</style>
