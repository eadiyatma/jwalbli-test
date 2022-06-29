<script setup>
// import { defineComponent } from "vue";

const emits = defineEmits({
  onTapComment: {
    type: Function,
    default: () => {},
  },
  onTapHome: {
    type: Function,
    default: () => {},
  },
});

function toHome() {
  emits("onTapHome");
}
function toComment() {
  console.log("licki");
  emits("onTapComment");
}
</script>

<template>
  <nav>
    <div class="flex gap-16">
      <div class="">Hello Jwalbli</div>
      <ul class="flex gap-4">
        <li><button class="bg-transparent" @click="toHome">Home</button></li>
        <li>
          <button class="bg-transparent" @click="toComment">Komentar</button>
        </li>
      </ul>
    </div>
  </nav>
</template>
