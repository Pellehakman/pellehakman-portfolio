<script src="./About.ts" lang="ts"></script>

<template>
  <div class="about-container relative flex flex-col">
    <div class="max-w-6xl mx-auto font-sofia text-white">
      <div class="flex flex-col justify-end items-end">
        <img :src="juno" alt="" />
        <label class="italic text-xs pr-8"> Roland Juno-60 </label>
      </div>
      <section class="pt-12 sm-max:pt-4 flex flex-col justify-center w-full">
        <h1 class="font-staatliches text-8xl sm-max:text-5xl text-white sm-max:px-8 px-4">
          About me
        </h1>
        <h2 class="font-sofia font-regular text-lg py-4 sm-max:text-base sm-max:px-8 px-4">
          Prior to pursuing web development, I spent many years working in the music industry.
          Alongside my brother, I run a recording studio called Upriver Recording Studio. Through
          this experience, I have had the opportunity to interact with a diverse range of people.
          Collaborating closely towards a common objective is something I am accustomed to and
          comfortable with. I have a soon to be wife. Who’s also a very creative person. And
          together we have a dachshund called Juno. After the 80’s synth
          <span class="underline"> “JUNO-60”.</span>
        </h2>
      </section>

      <div class="w-full flex">
        <div class="w-full pt-4">
          <h3 class="font-staatliches text-5xl sm-max:text-3xl text-white sm-max:px-8 px-4">
            Additional information & downloads
          </h3>
          <h2 class="font-regular text-lg font-sofia py-4 sm-max:text-base sm-max:px-8 px-4">
            Thank you for checking me out. And if you want to talk more, let's grab a coffee, lunch
            or something. 😊
          </h2>
          <div class="flex mx-4 sm-max:mx-8 flex-col">
            <div class="flex items-center gap-4">
              <a class="btn-style-shell" href="mailto: perhakman@outlook.com">Send Email</a>
              <a
                class="btn-style-shell"
                href="https://dl.dropboxusercontent.com/s/b8otlf67sp5q29p/Pelle%20H%C3%A5kman.pdf?dl=0"
                download
                >Download (CV)</a
              >
            </div>
            <div class="pt-8 text-base font-light">
              <p>Pelle Håkman</p>
              <p>Phone: +46736737638</p>
              <p>Sweden</p>
            </div>

            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center h-full items-end p-12">
      <button @click="restart" class="btn-style-fill">RESTART</button>
    </div>
  </div>
</template>

<style>
.btn-style-shell {
  @apply text-white font-sofia py-4 rounded-md sm-max:text-base px-6 border-2 border-white hover:bg-white hover:text-black active:bg-stone-300 active:border-stone-300;
}

.btn-style-fill {
  @apply text-black font-sofia py-4 rounded-md sm-max:text-base px-8 border-2 border-black bg-white hover:bg-black hover:text-white active:bg-stone-300 active:bg-transparent;
}
.about-container {
  @apply flex min-h-screen bg-black overflow-hidden;
}
</style>
