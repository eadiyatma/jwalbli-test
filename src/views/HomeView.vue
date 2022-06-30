<script setup>
import NavBar from "../components/navigation/NavBar.vue";
import ProfileSection from "../components/ProfileSection.vue";
import CommentSubmit from "../components/CommentSubmit.vue";
import CommentList from "../components/CommentList.vue";
import { inject, ref, onMounted, onUnmounted } from "vue";
import TabBarNav from "../components/navigation/TabBarNav.vue";
import SidebarNav from "../components/navigation/SidebarNav.vue";

const newItem = ref({});

onMounted(() => {
  window.addEventListener("scroll", onTapComment);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onTapComment);
});

function successSubmit(value) {
  console.log(value);
  newItem.value = value;
}

function onTapHome() {
  console.log("home");
  console.log(value);
}
const smoothScroll = inject("smoothScroll");
function onTapComment() {
  console.log("comment");
  document.getElementById("comment").scrollTop += 10;

  // toComment();
  // document.getElementById('parent').
  window.scrollTo({
    bottom: document.getElementById(`comment`),
    behavior: "smooth",
  });
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
  <main id="parent" class="bg-gray-200 scroll-smooth">
    <!-- create container -->
    <div
      class="px-8 py-6 xl:max-w-7xl mx-auto h-screen shadow bg-white rounded overflow-auto overflow-y-visible"
    >
      <NavBar id="home" @onTapHome="onTapHome" @onTapComment="onTapComment" />
      <!-- Navbar -->

      <!-- Profile -->
      <ProfileSection />

      <!-- Comment section -->
      <CommentSubmit id="comment" @onSuccess="successSubmit" />

      <!-- list comment -->
      <CommentList :new-item="newItem" ref="refComment" class="mt-8" />

      <!-- bottom navigation -->
      <TabBarNav />

      <!-- sidebar navigation -->
      <SidebarNav />
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
