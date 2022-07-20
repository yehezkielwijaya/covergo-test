<script setup></script>

<template>
  <main>
    <section class="left-section">
      <img src="../assets/front_page_diagram.svg" class="home-image" />
      <h3 class="main-title">The ultimate insurance wizard</h3>
      <h5 class="main-subtitle">
        Streamline your insurance ecosystem from end to end at record speed with
        CoverGo's fully configurable API driven insurance in a box platform.
      </h5>
    </section>
    <section class="right-section">
      <div>
        <h1 class="section-title">Hello There!</h1>
        <div class="flex flex-col justify-center h-full py-40 ">
          <h3 class="section-subtitle">Let's buy some insurance!</h3>
          <h3 class="section-subtitle">It is going to take only a few steps</h3>
        </div>
      </div>

      <nav class="navigations">
        <router-link to="/form" class="primary">Start</router-link>
      </nav>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.section-subtitle {
  @apply text-xl text-sky-800 font-semibold text-center;
}
</style>
