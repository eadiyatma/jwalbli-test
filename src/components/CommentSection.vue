<script setup>
import { inject, ref } from "vue";
import FormInput from "./FormInput.vue";
import TextArea from "./TextArea.vue";
import TitleSection from "./TitleSection.vue";

const axios = inject("axios");
const swal = inject("$swal");

const emit = defineEmits({
  onSuccess: {
    type: Function,
    default: (value) => {},
  },
});

const comment = ref("");

async function submitComment() {
  try {
    const response = await axios.post("/comments", {
      name: "Anonim",
      comment: comment.value,
    });

    if (response.status == 201) {
      emit("onSuccess", response.data);
      swal({
        title: "Berhasil Ditambahkan",
        icon: "success",
        timer: 2000,
      });
    }

    return response.data;
  } catch (e) {
    console.log(e);
    swal({
      title: "Gagal Ditambahkan",
      icon: "error",
      timer: 2000,
    });
  }
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <TitleSection>Tambah Komentar</TitleSection>
    <!-- <FormInput placeholder="Comment"></FormInput> -->
    <TextArea v-model="comment"></TextArea>
    <!-- button submit -->
    <div class="text-right">
      <button
        class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors ease-out duration-200"
        @click="submitComment"
      >
        Submit
      </button>
    </div>
  </div>
</template>
