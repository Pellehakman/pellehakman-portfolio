<script src="./Card2.ts" lang="ts"></script>

<template>
  <div class="card2-container">
    <div class="lr-container">
      <div
        v-motion-slide-visible-left
        :delay="300"
        class="l-container"
      >
        <p class="pr-12 text-container">
          Learning the user needs and desires, I deliver a tailored product experience.
        </p>
        <img
          class="img-size"
          :src="leftPic"
        >
        <div class="bg-yellow-200 opacity-10  w-96 h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
    </div>
    <div class="lr-container">
      <div
        v-motion-slide-visible-right
        :delay="900"
        class="r-container"
      >
        <img
          class="img-size"
          :src="rightPic"
        >

        <p class="pl-12 text-container">
          A product that integrates both user experience and interface design.
        </p>
        <div class="bg-teal-700 opacity-20  w-96 h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
    </div>
  </div>
</template>

<style>
.card2-container{
  @apply flex h-screen overflow-hidden
}
.lr-container{
  @apply  h-full w-full relative flex items-center
}
.text-container{
  @apply text-white font-sofia text-xl w-96
}
.l-container{
  @apply absolute -right-10 flex items-center
}
.r-container{
  @apply absolute -left-10 pt-32 flex items-center
}
.img-size{
  @apply h-[648px]
}
.animate-spin {
    animation: spin 100s linear infinite;
}

</style>
