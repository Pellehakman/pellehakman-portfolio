<script src="./Card1.ts" lang="ts">

</script>

<template>
<div class="max-w-screen-xl mx-auto flex flex-col justify-between pt-12 px-12 py-24 h-screen snap-both">
    <section class="flex-1 flex flex-col pt-12 ">
      <h2 class="font-oranienbaum text-5xl">Ok, are you ready?</h2>
      <p class="pr-12">Let me tell you how i work and some examples of it. Don't worry, it'll be quick ... I know, time is money, let's go! </p>
    </section>
    <div class=" pt-12 ">
      <!-- <p class="font-rainbow">button class=”bg-primary-600 font-base text-white font-bold py-4 px-12 rounded-md shadow-md hover:bg-primary-500 active:bg-primary-700 cursor-pointer” @click=”submit”</p>
       -->
      <div class="relative flex  ">
        
      <div >
           
           <button @click="toNext"
           class="bg-primary-600 font-base text-white font-bold py-4 px-12 rounded-md shadow-md hover:bg-primary-500 active:bg-primary-700 cursor-pointer">Let's go</button></div>
           <div>
        <img class="pt-12 target" :src="clicking" />
      </div>
    </div>
    </div>
    

  </div>
</template>

<style>

/* .target {
  transform: scaleX(-1);

  
} */

.expand {
  width: 100vw;
  background-color: blue;
  transform: ;
  
  transition: 1s all;
}


</style>
