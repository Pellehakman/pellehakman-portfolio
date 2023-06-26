<script src="./Code.ts" lang="ts"></script>

<template>
  <div class="code-container relative flex flex-col">
    <div class="middle-container relative">
      <div
        ref="targetA"
        class="absolute -translate-x-96 opacity-0 transition-all duration-1000"
        :class="{ animateIn: isTargetAVisible, a: isTargetAVisible }"
      >
        <img

          class="w-[640px]"
          :src="a"
        >
      </div>
      <div
        ref="targetB"
        class="absolute -translate-x-96 opacity-0  transition-all duration-1000"
        :class="{ animateIn: isTargetAVisible, b: isTargetAVisible }"
      >
        <img

          class="w-[640px]"
          :src="b"
        >
      </div>
      <div
        class="absolute -translate-x-96 opacity-0  transition-all duration-1000"
        :class="{ animateIn: isTargetAVisible, c: isTargetAVisible }"
      >
        <img

          class="w-[640px]"
          :src="c"
        >
      </div>
    </div>
  </div>
</template>

<style>
.animateIn{
  @apply  transition-all duration-1000 translate-x-0 opacity-100
}
.a {
  @apply  duration-1000
}
.b {
  @apply  delay-500 duration-1000
}
.c {
  @apply   delay-1000  duration-1000
}
.code-container{
  @apply flex h-screen bg-[#C74B2E]  overflow-hidden
}
.middle-container{
  @apply w-full h-full flex justify-center items-center relative
}
.card3-text{
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24
}

</style>
