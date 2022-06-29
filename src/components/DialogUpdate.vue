<script setup>
import { ref, inject, watch } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import TextArea from "./TextArea.vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const isOpen = ref(false);

function closeModal() {
  //   isOpen.value = false;
  emits("onClose", false);
}
function openModal() {
  isOpen.value = true;
}
const swal = inject("$swal");
const axios = inject("axios");
const comment = ref("");
async function submitUpdate() {
  try {
    const response = await axios.put(`comments/${props.id}`, {
      name: "Anonim",
      comment: comment.value,
    });
    if (response.status == 200) {
      comment.value = "";
      closeModal();
      toast.success("Komentar berhasil diubah");
    }
  } catch (e) {
    console.log(e);
    toast.success("Komentar gagal diubah");
  }
}

const emits = defineEmits({
  onClose: {
    type: Function,
    default: (value) => {},
  },
});
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    default: false,
    required: true,
  },
  id: {
    type: String,
    default: "",
    required: true,
  },
  item: {
    type: Object,
    default: {},
    required: true,
  },
});

watch(
  () => props.isModalOpen,
  (first) => {
    console.log("Watch props.selected function called with args:", first);
    comment.value = props.item.body;
    console.log(comment.value);
    console.log(props.item.body);
  }
);
</script>

<template>
  <div>
    <TransitionRoot appear :show="props.isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Ubah Komentar
                </DialogTitle>
                <div class="mt-2">
                  <TextArea v-model="comment" />
                </div>

                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors ease-out duration-200"
                    @click="submitUpdate"
                  >
                    Simpan
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
