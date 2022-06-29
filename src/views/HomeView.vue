<script setup>
import NavBar from "../components/NavBar.vue";
import ProfileSection from "../components/ProfileSection.vue";
import CommentSection from "../components/CommentSection.vue";
import CommentList from "../components/CommentList.vue";

function successSubmit(value) {
  console.log(value);
}
</script>

<template>
  <main class="bg-gray-200">
    <!-- create container -->
    <div
      class="px-8 py-6 xl:max-w-7xl mx-auto h-screen shadow bg-white rounded overflow-auto overflow-y-visible"
    >
      <NavBar />
      <!-- Navbar -->

      <!-- Profile -->
      <ProfileSection />

      <!-- Comment section -->
      <CommentSection @onSuccess="successSubmit" />

      <!-- list comment -->
      <CommentList class="mt-8" />
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
