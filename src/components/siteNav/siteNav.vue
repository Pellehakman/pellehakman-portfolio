<script src="./siteNav.ts" lang="ts"></script>

<template>
  <div
    ref="navbarRef"
    class="w-full top-0 sticky bg-white transition-all"
  >
    <nav class="h-20 max-w-7xl mx-auto flex justify-between items-center">
      <RouterLink
        class="one"
        to="/"
      >
        <span class="font-poiret text-black text-2xl">HOME</span>
      </RouterLink>
      <div class="flex gap-12">
        <RouterLink
          class="two"
          to="/about"
        >
          <span class="font-poiret text-black text-2xl">ABOUT</span>
        </RouterLink>
        <RouterLink to="/resume">
          <span class="font-poiret text-black text-2xl">RESUME</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style>
.one,
.two {
  @apply border-b-[.5px] border-transparent duration-700 transition-all hover:border-b-[.5px] hover:border-black;
}
.router-link-active {
  @apply border-black border-b-[.5px];
}
</style>
