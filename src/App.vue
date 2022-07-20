<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
#app {
  @apply flex flex-col items-center p-4 h-screen w-screen;
}

main {
  @apply flex space-x-1 border overflow-hidden rounded-xl h-full w-full max-w-screen-xl shadow-lg;
}

section.left-section {
  @apply bg-gradient-to-br from-emerald-500 to-[#1D479B] text-white p-8 hidden sm:flex sm:flex-col;
  min-width: 50%;
}

.home-image {
  width: 500px;
  height: 400px;
  @apply p-10;
}

.main-title {
  @apply text-4xl font-semibold mb-2;
}

.main-subtitle {
  @apply text-xl;
}

section.right-section {
  @apply w-full py-4 px-8 flex flex-col justify-start bg-transparent;
  min-width: 50%;
}

section.right-section h1.section-title{
  @apply text-[#1D479B] font-bold text-4xl mb-4;
}

nav.navigations {
  @apply flex justify-end space-x-2 mt-auto;
}

nav.navigations a {
  @apply px-6 py-2 rounded-lg font-medium border border-emerald-600 text-emerald-600 shadow-md bg-white;
}

nav.navigations a.primary {
  @apply px-6 py-2 rounded-lg text-emerald-800 font-semibold bg-emerald-400 border border-emerald-400;
}
</style>
