<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "TextArea",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const typeInput = ref(props.type);
    function onInput(event) {
      emit("update:modelValue", event.target.value);
    }
    return {
      onInput,
    };
  },
});
</script>

<template>
  <div class="">
    <div v-if="label" class="font-bold">{{ label }}</div>
    <textarea
      :modelValue="modelValue"
      :value="modelValue"
      class="p-4 border shadow-shadowDrop border-gray-200 rounded-lg transition focus:ring focus:ring-primary outline-none w-full"
      :placeholder="placeholder"
      @input="onInput"
    ></textarea>
  </div>
</template>
