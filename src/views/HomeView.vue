<script setup>
</script>

<template>
  <main>
    <section class="left-section">
      <img src="../assets/front_page_diagram.svg" class="home-image"/>
      <h3 class="main-title">The ultimate insurance wizard</h3>
      <h5 class="main-subtitle">Streamline your insurance ecosystem from end to end at record speed with CoverGo's fully configurable API driven insurance in a box platform.</h5>
    </section>
    <section class="right-section">
      <h1>Hello World!</h1>

      <nav class="navigations">
        <router-link to="/form" class="primary">Next</router-link>
      </nav>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.home-image {
  width: 500px;
  height: 400px;
  @apply p-10;
}

.main-title {
  @apply text-4xl font-semibold mb-2;
}.main-subtitle {
  @apply text-xl;
}
</style>
