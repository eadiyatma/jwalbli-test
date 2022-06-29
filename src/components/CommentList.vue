<script setup>
import { inject, onMounted, ref } from "vue";
import CardComment from "./icons/CardComment.vue";
import TitleSection from "./TitleSection.vue";
import DialogUpdate from "./DialogUpdate.vue";
import { useToast } from "vue-toastification";

const axios = inject("axios");
const swal = inject("$swal");
const toast = useToast();

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
const itemData = ref({});
function tapUpdate(value) {
  // console.log(value);
  itemData.value = value;
  idUpdate.value = value.id;
  console.log("asdasd");
  modalUpdateOpen.value = true;
}
function tapDelete(value) {
  console.log(value);
  idUpdate.value = value.id;
  swal({
    title: "Komentar akan dihapus",
    html:
      `<p class="text-left font-medium">Email: </p>` +
      `<p class="text-left text-primary font-medium">${value.email}</p>` +
      `<br />` +
      `<p class="text-left font-medium">Komentar: </p>` +
      `<p class="text-left">${value.body}</p>`,
    icon: "warning",
    confirmButtonText: "Hapus",
    denyButtonText: "Batal",
    showDenyButton: true,
    reverseButtons: true,
    confirmButtonColor: "#F5587B",
    denyButtonColor: "#D1D5DB",
  }).then((result) => {
    if (result.isConfirmed) deleteData();
  });
}

async function deleteData() {
  try {
    const response = await axios.delete(`comments/${idUpdate.value}`);
    console.log(response.status);
    if (response.status == 200) {
      toast.success("Komentar berhasil dihapus");
      getComment();
    }
    return response.data;
  } catch (e) {
    toast.error("Komentar gagal dihapus");
    console.log(e);
  }
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
      <div v-if="listComment.length == 0">Tunggu Sebentar...</div>
      <CardComment
        v-for="(item, index) in listComment"
        :key="index"
        :name="item.email"
        :desc="item.body"
        :id="`${item.id}`"
        :item="item"
        @tapDelete="tapDelete"
        @tapUpdate="tapUpdate(item)"
      />
    </div>

    <!-- show modal -->
    <DialogUpdate
      :is-modal-open="modalUpdateOpen"
      :item="itemData"
      @onClose="onCloseModalUpdate"
      :id="`${idUpdate}`"
    />
  </div>
</template>
