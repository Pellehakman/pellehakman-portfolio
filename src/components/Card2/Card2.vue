<script src="./Card2.ts" lang="ts"></script>

<template>
  <div class="card2-container bg-slate-900 bg-opacity-20">
    <div class="lr-container">
      <p
        v-motion-slide-visible-once-left
        class=" absolute top-32 left-0 w-screen px-12  text-center font-sofia text-white  "
        :delay="300"
      >
        Learning the user needs and desires. <br> I deliver a tailored product experience.
      </p>
      <div
        v-motion-slide-visible-once-left
        :delay="300"
        class="l-container"
      >
        <div class="flex justify-center items text-center w-96 p-12 sm-max:hidden">
          <p class=" text-container text-right ">
            Learning the user needs and desires, I deliver a tailored product experience.
          </p>
        </div>
        <img
          class="img-size"
          :src="leftPic"
        >
        <div class="bg-pink-500 opacity-20 rounded-full w-80 h-96 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
      <p
        v-motion-slide-visible-once-right
        class=" absolute bottom-16 left-0 w-screen px-12   text-center font-sofia text-white "
        :delay="900"
      >
        A product that integrates both user experience and interface design.
      </p>
    </div>
    <div class="lr-container">
      <div
        v-motion-slide-visible-once-right
        :delay="900"
        class="r-container"
      >
        <img
          class="img-size"
          :src="rightPic"
        >
        <div class="flex  justify-center items text-center w-96 p-12 sm-max:hidden">
          <p class=" text-container text-left   ">
            A product that integrates both user experience and interface design.
          </p>
        </div>

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
  @apply text-white font-sofia text-xl sm-max:text-sm
}
.l-container{
  @apply absolute -right-10 flex items-center
}
.r-container{
  @apply absolute -left-10 pt-32 flex items-center
}
.img-size{
  @apply h-[648px] sm-max:h-[450px]
}
.animate-spin {
    animation: spin 100s linear infinite;
}

</style>
