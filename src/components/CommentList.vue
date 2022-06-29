<script setup>
import { inject, onMounted, ref, defineEmits } from "vue";
import CardComment from "./icons/CardComment.vue";

const axios = inject("axios");

onMounted(() => {
  getComment();
});

async function getComment() {
  try {
    const response = await axios.get("comments");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 warp">
    <div class="font-medium">Daftar komentar</div>

    <!-- list comment -->
    <CardComment />
  </div>
</template>
