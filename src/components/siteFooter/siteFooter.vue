<script src="./siteFooter.ts" lang="ts"></script>

<template>
  <div class="footer-container relative flex justify-center flex-col">
    <div class="max-w-6xl mx-auto flex justify-center flex-col font-sofia">
      <p class="text-white">Hope to hear form you. Bye!</p>
      <button @click="restart" class="py-3 px-12 bg-white font-sofia">RESTART</button>
    </div>
  </div>
</template>

<style>
.footer-container {
  @apply flex h-screen bg-black overflow-hidden;
}
</style>
