<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="postcss">
#app {
  @apply p-4
}

nav.navigations {
  @apply flex justify-end space-x-2 my-8;
}
nav.navigations a {
  @apply  px-6 py-2 rounded border border-indigo-500;
}
nav.navigations a.primary {
  @apply  px-6 py-2 rounded text-white bg-indigo-500 border border-indigo-500;
}
</style>
