<script src="./siteHeader.ts" lang="ts"></script>

<template>
  <header class="bg-gradient-to-r from-neutral-300 to-neutral-400">
    <div class="max-w-screen-xl mx-auto flex py-12">
      <section class="text-black py-24">
        <h1 class="font-poiret text-7xl">
          Hi. I'm <span class="text-blue-500">Pelle</span>
        </h1>
        <h2 class="font-poiret text-xl font-bold pt-4 ">
          I am a Web designer and Frontend developer. On this site, you can <br/> learn about me through this guided tour
        </h2>
        
      </section>

      <img
        class="ml-auto w-24"
        :src="man"
        alt=""
      >

      <div class="flex items-end p-12">
        <button  class="bg-primary-600 py-4 px-16 text-white font-bold rounded-sm shadow-md">
          Guided tour
        </button>
      </div>
    </div>
  </header>
</template>

<style></style>
