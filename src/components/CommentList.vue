<script setup>
import { inject, onMounted, ref, defineEmits } from "vue";
import CardComment from "./icons/CardComment.vue";
import TitleSection from "./TitleSection.vue";
import DialogUpdate from "./DialogUpdate.vue";

const axios = inject("axios");

onMounted(() => {
  getComment();
});

const listComment = ref([]);

async function getComment() {
  try {
    const response = await axios.get("comments");

    if (response.status == 200) {
      listComment.value = response.data;
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

const idUpdate = ref("");
function tapUpdate(value) {
  console.log(value);
  modalUpdateOpen.value = true;
  idUpdate.value = value;
}
function tapDelete(value) {
  console.log(value);
}

const modalUpdateOpen = ref(false);
function onCloseModalUpdate(value) {
  modalUpdateOpen.value = false;
  console.log(value);
}
</script>

<template>
  <div class="flex flex-col gap-4 warp">
    <TitleSection>Daftar Komentar</TitleSection>

    <!-- list comment -->
    <div class="flex flex-col gap-4">
      <CardComment
        v-for="(item, index) in listComment"
        :key="index"
        :name="item.email"
        :desc="item.body"
        :id="`${item.id}`"
        @tapDelete="tapDelete"
        @tapUpdate="tapUpdate(item.id)"
      />
    </div>

    <!-- show modal -->
    <DialogUpdate
      :is-modal-open="modalUpdateOpen"
      @onClose="onCloseModalUpdate"
      :id="`${idUpdate}`"
    />
  </div>
</template>
