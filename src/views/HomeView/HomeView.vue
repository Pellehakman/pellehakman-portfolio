import Card3 from '@/components/Card3/Card3';

<script src="./HomeView" lang="ts"></script>

<template>
  <div class="snap-both">
    <siteNav class="snap-center" />
    <div class="h-[calc(100vh-80px)] flex flex-col">
      <siteHeader />

      <div class="flex h-full">
        <smallCards />
      </div>
    </div>
    <Card2 />
    <Card3 />
  </div>
</template>

