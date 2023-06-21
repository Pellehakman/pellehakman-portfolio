<script src="./siteNav.ts" lang="ts"></script>

<template>
  <div
    ref="navbarRef"
    class="w-full top-0 sticky bg-black text-white transition-all overflow-hidden font-staatliches z-50"
  >
    <nav class="h-20 max-w-6xl mx-auto flex justify-between items-center relative ">
      <div class="flex flex-col">
        <span class="font-sofia  text-xl font-extralight">Pelle Håkman</span>
        <span class="text-3xl">WEB DESIGNER & DEVELOPER</span>
      </div>
      <div class="flex gap-12">
        <RouterLink
          class="two"
          to="/"
        >
          <span class="text-base font-sofia ">ABOUT</span>
        </RouterLink>
        <RouterLink to="/resume">
          <span class="text-base font-sofia ">RESUME</span>
        </RouterLink>
      </div>
      <div class=" bg-pink-700 left-0 obj1 colorBomb" />
      <div class=" bg-purple-950 left-32 obj2 colorBomb" />
      <div class=" bg-lime-700 left-60 obj3 colorBomb" />
    </nav>
    <progressBar />
  </div>
</template>

<style>
/* .one,
.two {
  @apply border-b-4 border-transparent duration-300 transition-all hover:border-b-4 hover:border-white;
}
.router-link-active {
  @apply border-white border-b-4;
} */
.colorBomb{
  @apply rounded-full absolute blur-3xl opacity-50 -z-10 w-32 h-56
}
.obj1{
  animation: obj1 infinite ;
  animation-duration: 10s ;
}
.obj2{
  animation: obj1 infinite ;
  animation-duration: 6s ;
}
.obj3{
  animation: obj1 infinite ;
  animation-duration: 14s ;
}

@keyframes obj1 {
  0% {
    rotate: 90deg;
    transform: scaleX(1);
  }
  50%   {
    transform: scaleX(1.3);
  }
  100%   {
    rotate: 180deg;
    transform: scaleX(1);
  }
}
@keyframes obj2 {
  0% {
    rotate: 0deg;
    transform: scaleX(1);
  }
  50%   {
    rotate: 60deg;
    transform: scaleX(2);
  }
  100%   {
    rotate: 0deg;
    transform: scaleX(1);
  }
}
@keyframes obj3 {
  0% {
    rotate: 0deg;
    transform: scaleX(1);
  }
  50%   {
    transform: scaleX(1.3);
  }
  100%   {
    rotate: 180deg;
    transform: scaleX(1);
  }
}

</style>
