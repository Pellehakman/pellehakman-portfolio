<script src="./About.ts" lang="ts"></script>

<template>
  <div class="about-container relative flex flex-col">
    <div class="max-w-6xl mx-auto font-sofia text-white">
      <section class="pt-12 flex flex-col justify-center w-full">
        <h1 class="font-staatliches text-8xl sm-max:text-5xl text-white sm-max:px-8 px-4">
          Almost there
        </h1>
        <h2 class="text-xl font-sofia font-light py-4 sm-max:text-base sm-max:px-8 px-4">
          Prior to pursuing web development, I spent many years working in the music industry.
          Alongside my brother, I run a recording studio called Upriver Recording Studio. Through
          this experience, I have had the opportunity to interact with a diverse range of people.
          Collaborating closely towards a common objective is something I am accustomed to and
          comfortable with. I have a soon to be wife. Who’s also a very creative person. And
          together we have a dachshund called Juno. After the 80’s synth
          <span class="underline"> “JUNO-60”.</span>
        </h2>
        <div class="flex flex-col justify-end items-end">
          <img :src="juno" alt="" />
          <label class="italic text-xs pr-8"> Roland Juno-60 </label>
        </div>
      </section>
      <section class="mt-12">
        <h2 class="text-xl font-sofia font-light py-4 sm-max:text-base sm-max:px-8 px-4">
          Thank you for checking me out. And if you want to talk more, let's grab a coffee, lunch or
          something. 😊
        </h2>
        <div class="w-full flex">
          <div class="w-full">
            <h3 class="font-staatliches mt-12 text-5xl sm-max:text-3xl text-white sm-max:px-8 px-4">
              Additional information & downloads
            </h3>
            <div class="flex pt-8 mx-8 flex-col">
              <div class="flex items-center gap-4">
                <a
                  class="py-3 sm-max:text-xs px-8 border-2 border-white whitespace-nowrap"
                  href="mailto: perhakman@outlook.com"
                  >Send Email</a
                >
                <a
                  class="py-3 sm-max:text-xs px-8 border-2 border-white whitespace-nowrap"
                  href="https://dl.dropboxusercontent.com/s/b8otlf67sp5q29p/Pelle%20H%C3%A5kman.pdf?dl=0"
                  download
                  >Download resume (CV)</a
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
      </section>
    </div>
  </div>
</template>

<style>
.about-container {
  @apply flex min-h-screen bg-black overflow-hidden;
}
</style>
