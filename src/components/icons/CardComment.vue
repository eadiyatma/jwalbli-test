<script setup>
// import { defineEmits } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  desc: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  item: {
    type: Object,
    default: {},
  },
});

const emits = defineEmits({
  tapDelete: {
    type: Function,
    default: (value) => {},
  },
  tapUpdate: {
    type: Function,
    default: (value) => {},
  },
});

function tapDelete() {
  emits("tapDelete", props.item);
}

function tapUpdate() {
  emits("tapUpdate", props.id);
}
</script>

<template>
  <div class="w-full rounded-lg border shadow p-4 flex flex-col gap-2">
    <!-- title -->
    <div class="font-medium text-primary">{{ props.name }}</div>
    <div>
      {{ props.desc }}
    </div>
    <div class="text-white flex flex-row gap-2 justify-end">
      <button
        @click="tapUpdate"
        class="px-4 py-2 bg-gray-400 hover:bg-gray-700 transition-colors ease-out duration-200 rounded"
      >
        Ubah
      </button>
      <button
        @click="tapDelete"
        class="px-4 py-2 bg-error hover:bg-red-700 transition-colors ease-out duration-200 rounded"
      >
        Hapus
      </button>
    </div>
  </div>
</template>
