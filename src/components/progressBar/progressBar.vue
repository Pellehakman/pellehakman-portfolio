<script src="./progressBar.ts" lang="ts"></script>

<template>
  <div class="top-0 w-full z-10">
    <div class="w-full h-1">
      <div :ref="bar" id="myBar" style="width: 0%" class="progress-bar bg-pink-600 h-1" />
    </div>
  </div>
</template>
