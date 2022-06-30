<script setup>
import IconHome from "../icons/IconHome.vue";
import IconComment from "../icons/IconComment.vue";
</script>

<template>
  <div class="fixed w-full left-0 bottom-2 flex justify-center">
    <div class="px-6 py-4 bg-white shadow border rounded-lg">
      <ul class="flex gap-12 font-medium text-xl text-primary">
        <li>
          <a href="#home" class="flex gap-2 items-center"><IconHome /> Home</a>
        </li>
        <li>
          <a href="#comment" class="flex gap-2 items-center"
            ><IconComment /> Komentar</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
