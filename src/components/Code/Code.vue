<script src="./Code.ts" lang="ts"></script>

<template>
  <div class="code-container relative">
    <div class="middle-container">
      <div class="relaive bottom-0">
        <img
          class="w-[768px] absolute bottom-0"
          :src="a"
        >
        <img
          class="w-[768px] absolute bottom-0"
          :src="b"
        >
        <img
          class="w-[768px] absolute bottom-0"
          :src="c"
        >
      </div>
    </div>
  </div>
</template>

<style>
.code-container{
  @apply flex h-screen bg-[#C74B2E]  overflow-hidden
}
.middle-container{
  @apply w-full flex justify-center items-center relative
}
.card3-text{
  @apply h-full w-80 flex items-end text-white font-sofia text-xl pb-24
}

</style>
