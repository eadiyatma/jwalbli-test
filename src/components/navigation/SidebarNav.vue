<script setup>
import { ref } from "vue";
import IconMenu from "../icons/IconMenu.vue";
import IconHome from "../icons/IconHome.vue";
import IconComment from "../icons/IconComment.vue";

const isOpen = ref(false);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <!-- button -->
    <div class="fixed right-0 top-0 max-w-7xl left-0 mx-auto flex justify-end">
      <button
        @click="toggleSidebar"
        class="flex items-center rounded bg-white border shadow w-max text-primary p-2"
      >
        <IconMenu />
      </button>
    </div>

    <!-- overlay -->
    <div
      @click="toggleSidebar"
      v-if="isOpen"
      class="fixed w-full h-screen bg-gray-700 left-0 top-0 opacity-10"
    ></div>

    <!-- sidebar menu -->
    <div
      v-if="isOpen"
      class="fixed h-screen bg-white shadow border right-0 top-0 rounded-l-xl"
    >
      <!-- side menu -->
      <div class="p-8">
        <ul class="flex flex-col gap-12 font-medium text-xl text-primary">
          <li>
            <a href="#home" class="flex gap-2 items-center"
              ><IconHome /> Home</a
            >
          </li>
          <li>
            <a href="#comment" class="flex gap-2 items-center"
              ><IconComment /> Komentar</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
