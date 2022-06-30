<script setup>
import IconGlobe from "./icons/IconGlobe.vue";
import { ref } from "vue";
const pic = new URL(`../assets/efran.png`, import.meta.url).href;
</script>

<template>
  <div class="h-full flex items-center relative">
    <div
      class="flex gap-12 justify-center xl:justify-between w-full flex-wrap-reverse xl:flex-nowrap"
    >
      <div class="flex gap-4 flex-col justify-center">
        <div class="text-xl md:text-4xl">Hi, Saya</div>
        <div class="text-4xl md:text-6xl font-bold">Efran Adiyatma</div>
        <div class="text-md md:text-xl">
          Saya tinggal di Bandung dan saya berpengalaman sebagai Front-end
          developer selama 1 tahun 9 bulan. Saya biasa mengerjakan project
          menggunakan Nuxt Js dan Vue Js.
        </div>
      </div>
      <div class="">
        <div class="w-96 flex items-center">
          <img :src="pic" alt="" class="mx-auto" />
        </div>
      </div>
    </div>
    <div class="w-[340px] xl:w-96 absolute">
      <IconGlobe />
    </div>
  </div>
</template>
