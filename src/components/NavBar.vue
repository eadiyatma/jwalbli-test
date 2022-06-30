<script setup>
// import { defineComponent } from "vue";
import { onMounted, onUnmounted } from "vue";

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
  // window.scrollTo({
  //   top: document.getElementById(`comment`),
  //   behavior: "smooth",
  // });
  // console.log("licki");
  emits("onTapComment");
}
</script>

<template>
  <nav>
    <div class="flex gap-16">
      <div class="font-bold text-xl">Hello Jwalbli</div>
      <ul class="flex gap-4">
        <li><a href="#home" class="bg-transparent">Home</a></li>
        <li>
          <a href="#comment" class="bg-transparent">Komentar</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
