<script src="./Card3.ts" lang="ts"></script>

<template>
  <div class="flex h-screen">
    <div class="h-full w-1/4 flex items-end justify-center bg-slate-700">
      <p class="h-96 w-96 bg-zinc-700">
        text
      </p>
    </div>
    <div class="h-full w-1/2  ">
      <img
      :src="shoe"
        class="pic object-cover "
      >
    </div>
    <div class="h-full w-1/4 flex items-end justify-center bg-slate-700">
      <p class="h-96 w-96 bg-zinc-700">
        text
      </p>
    </div>
  </div>
  <!-- <div
    v-motion-fade-visible
    class="h-screen flex justify-center items-center snap-center "
  >
    <img
      class=""
      :src="shoe"
      alt=""
    >
  </div> -->
</template>

<style>
/* .pic{
  width: 100%;
  height: 100%;
  
  background-size: 100%;
  background-image: url('@/assets/pictures/shoe.png');
  background-repeat: no-repeat;
  background-position: center;
} */
</style>
