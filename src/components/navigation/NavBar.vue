<script setup>
// import { defineComponent } from "vue";
import { onMounted, onUnmounted } from "vue";
import IconHome from "../icons/IconHome.vue";
import IconComment from "../icons/IconComment.vue";

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
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-16">
      <div class="font-bold text-xl">Hello Jwalbli Teams</div>
      <ul class="flex gap-6 font-medium">
        <li>
          <a href="#home" class="bg-transparent flex items-center gap-2"
            ><IconHome /> Home</a
          >
        </li>
        <li>
          <a href="#comment" class="bg-transparent flex items-center gap-2"
            ><IconComment /> Komentar</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
