<script setup>
import NavBar from "../components/NavBar.vue";
import ProfileSection from "../components/ProfileSection.vue";
</script>

<template>
  <main class="bg-gray-50">
    <!-- create container -->
    <div
      class="px-8 py-6 xl:max-w-7xl mx-auto h-screen shadow bg-white rounded"
    >
      <!-- Navbar -->
      <NavBar />

      <!-- Profile -->
      <ProfileSection />
    </div>
  </main>
</template>
