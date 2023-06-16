<script src="./HomeView" lang="ts"></script>

<template>
  <siteNav />

  <div class="h-[calc(100vh-80px)] flex flex-col">
    <siteHeader />
    <div class="flex h-full">
      <smallCards />
    </div>
  </div>
  <div class=" overflow-hidden">
    <Card2 />

    <Card3 />
  </div>
</template>
