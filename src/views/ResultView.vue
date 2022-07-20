<script setup>
import { storeToRefs } from "pinia";
import { useInsuranceStore } from "../stores/insurance";

const ins = useInsuranceStore();
const { name, age, location, pack, premium, currency } = storeToRefs(ins);
const { resetData } = ins;
</script>

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
      <h1 class="section-title">Insurance Package Summary</h1>

      <div class="result-wrapper">
        <div class="my-4 space-y-4 text-xl text-center">
          <div>{{ pack }} Package</div>

          <div>Insurance for {{ name }}</div>
          <div>{{ age }} Years Old</div>
          <div>
            Live in
            {{
              location === "1"
                ? "Hong Kong"
                : location === "2"
                ? "USA"
                : "Australia"
            }}
          </div>
        </div>

        <div class="premium-wrapper">
          <div>Your Premium is</div>
          <div class="premium-score">
            {{ premium + " " + currency }}
          </div>
        </div>
      </div>

      <nav class="navigations">
        <router-link to="/form">Back</router-link>
        <router-link to="/" class="primary" @click="ins.$reset()">Buy</router-link>
      </nav>
    </section>
  </main>
</template>

<style lang="postcss" scoped>
.result-wrapper {
  @apply flex flex-col p-4 items-center justify-between;
}

.result-wrapper .title {
  @apply text-3xl font-semibold;
}
.premium-wrapper {
  @apply flex flex-col items-center w-full py-4 px-8 rounded-2xl text-white;
  background: #1d479b;
}

.premium-score {
  @apply text-3xl font-medium;
}
</style>
