<script src="./Card2.ts" lang="ts"></script>

<template>
  <div class="relative h-screen overflow-hidden">
    <div
      v-motion-slide-visible-left
      class=" absolute left-[40%] transform -translate-x-1/2  "
      :delay="200"
    >
      <img
        class="h-[648px] "
        :src="leftPic"
      >
    </div>
    <div
      v-motion-slide-visible-right
      class="absolute top-12 right-[40%] transform -translate-x-1/2  "
      :delay="500"
    >
      <img
        class=" h-[648px]"
        :src="rightPic"
      >
    </div>
  </div>
</template>

<style>
.leftPic{

background-position: center;
background-image: url('@/assets/pictures/home-l.png');

}
.rightPic{
background-image: url('@/assets/pictures/home-r.png');
}
.animate-spin {
    animation: spin 100s linear infinite;
}

</style>
