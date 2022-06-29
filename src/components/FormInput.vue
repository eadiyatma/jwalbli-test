<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "KInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    dense: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isPassword: {
      type: Boolean,
      default: false,
    },
    maxLength: {
      type: Number,
      default: 100,
    },
  },
  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const typeInput = ref(props.type);
    function togglePassword() {
      typeInput.value = typeInput.value === "password" ? "text" : "password";
    }
    function onInput(event) {
      emit("update:modelValue", event.target.value);
    }
    return {
      typeInput,
      togglePassword,
      onInput,
    };
  },
});
</script>

<template>
  <div class="" :class="dense ? 'py-0 my-0' : ''">
    <div v-if="label" class="font-bold">{{ label }}</div>
    <div :class="`${type == 'checkbox' ? 'flex' : ''} relative`">
      <input
        :type="typeInput"
        class="p-4 border shadow-shadowDrop border-gray-200 rounded-lg transition focus:ring focus:ring-primary outline-none"
        :class="type === 'checkbox' ? '' : 'block w-full'"
        :placeholder="placeholder"
        :modelValue="modelValue"
        :value="type === 'checkbox' ? 1 : modelValue"
        :disabled="disabled"
        :maxlength="maxLength"
        @input="onInput"
      />
      <label v-if="type === 'checkbox'" class="mx-2">{{ label }}</label>
      <div
        v-if="isPassword"
        class="absolute right-0 pr-3 flex items-center leading-5 top-5 hover:cursor-pointer text-text-button font-medium"
        @click="togglePassword"
      >
        Show
      </div>
    </div>
  </div>
</template>
