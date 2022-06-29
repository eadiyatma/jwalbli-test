<script setup>
import NavBar from "../components/NavBar.vue";
import ProfileSection from "../components/ProfileSection.vue";
import CommentSubmit from "../components/CommentSubmit.vue";
import CommentList from "../components/CommentList.vue";
import { inject, ref } from "vue";

function successSubmit(value) {
  console.log(value);
}

function onTapHome() {
  console.log("home");
  console.log(value);
}
const smoothScroll = inject("smoothScroll");
function onTapComment() {
  console.log("comment");
  toComment();
}

const refComment = ref(null);
const toComment = () => {
  console.log(refComment.value);
  smoothScroll({
    scrollTo: refComment.value,
  });
};
</script>

<template>
  <main class="bg-gray-200">
    <!-- create container -->
    <div
      class="px-8 py-6 xl:max-w-7xl mx-auto h-screen shadow bg-white rounded overflow-auto overflow-y-visible"
    >
      <NavBar @onTapHome="onTapHome" @onTapComment="onTapComment" />
      <!-- Navbar -->

      <!-- Profile -->
      <ProfileSection />

      <!-- Comment section -->
      <CommentSubmit @onSuccess="successSubmit" />

      <!-- list comment -->
      <CommentList ref="refComment" class="mt-8" />
    </div>
  </main>
</template>

<style>
/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
