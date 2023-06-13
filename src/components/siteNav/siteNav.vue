<script src="./siteNav.ts" lang="ts"></script>http://localhost:5173/

<template>
  <div class="w-full top-0 sticky bg-white transition-all " ref="navbarRef">
<nav class="h-20 max-w-7xl mx-auto flex justify-between items-center">
  <RouterLink to="/">
    <span class=" font-poiret text-black text-2xl ">HOME</span>
  </RouterLink>
  <div class="flex gap-12">
  <RouterLink to="/">
    <span class=" font-poiret text-black text-2xl">ABOUT</span>
  </RouterLink>
  <RouterLink to="/">
    <span class=" font-poiret text-black text-2xl">RESUME</span>
  </RouterLink>
</div>
</nav>
</div>
</template>

<style>

</style>