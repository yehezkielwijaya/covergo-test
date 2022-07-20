<script setup>
import { storeToRefs } from "pinia";
import { useInsuranceStore } from "../stores/insurance";

const ins = useInsuranceStore();
const { name, age, location, pack, premium, currency } = storeToRefs(ins);
const { getCurrency, getPricing, getSSafeAdd, getSafeAdd } = ins;
</script>

<template>
  <main>
    <section class="left-section">
      <img src="../assets/front_page_diagram.svg" class="home-image" />
      <h3 class="main-title">The ultimate insurance wizard</h3>
      <h5 class="main-subtitle">Streamline your insurance ecosystem from end to end at record speed with CoverGo's fully configurable API driven insurance in a box platform.</h5>
    </section>
    <section class="right-section">
      <div>Insurance Form</div>
      <div>
        <form @submit.prevent="checkAge">
          <label class="label-elem">
            <div>Name</div>
            <input
              class="input-text"
              type="text"
              v-model="name"
              placeholder="your name"
            />
          </label>
          <label :class="[err !== 0 ? 'error' : '']" class="label-elem">
            <div>Age</div>
            <div class="input-wrapper">
              <input
                type="text"
                class="input-text"
                v-model.number="age"
                placeholder="your age"
              />
              <small class="helper">{{ helperMsg }}</small>
            </div>
          </label>
          <label class="label-elem">
            <div>Where do you live</div>
            <select class="input-select" name="place" v-model="location">
              <option disabled value="0">Please Select One</option>
              <option value="1">Hong Kong</option>
              <option value="2">USA</option>
              <option value="3">Australia</option>
            </select>
          </label>
          <div class="flex flex-col label-elem">
            <div class="radio-label">Package Type</div>
            <div class="flex justify-between space-x-4">
              <div class="radio-item">
                <input
                  type="radio"
                  v-model="pack"
                  id="standardPack"
                  value="Standard"
                />
                <label for="standardPack">Standard</label>
              </div>
              <div class="radio-item">
                <input type="radio" v-model="pack" id="safePack" value="Safe" />
                <label for="safePack"
                  >Safe (+{{
                    getSafeAdd(age, location) + " " + currency
                  }})</label
                >
              </div>
              <div class="radio-item">
                <input
                  type="radio"
                  v-model="pack"
                  id="superSafePack"
                  value="Super Safe"
                />
                <label for="superSafePack"
                  >Super Safe (+{{
                    getSSafeAdd(age, location) + " " + currency
                  }})</label
                >
              </div>
            </div>
          </div>
          <div class="premium-wrapper">
            <div>Your Premium is</div>
            <div class="premium-score">
              {{
                getPricing(age, location, pack) + " " + getCurrency(location)
              }}
            </div>
          </div>
        </form>
      </div>

      <nav class="navigations">
        <router-link to="/">Back</router-link>
        <router-link to="/result" class="primary">Proceed</router-link>
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      helperMsg: "Input your age, maximum age is 100",
      err: 0
    };
  },
  watch: {
    age(value) {
      this.age = value;
      this.checkAge(value);
    }
  },
  methods: {
    checkAge(value) {
      if (value > 100 || value < 0) {
        this.helperMsg = "Invalid age, maximum age is 100";
        this.err++;
      } else {
        this.helperMsg = "Input your age, maximum age is 100";
        this.err = 0;
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.label-elem {
  @apply flex flex-col mb-4 relative;
}

.label-elem .input-wrapper {
  @apply relative;
}

.label-elem.error input {
  @apply border-red-500 relative outline-red-500;
}

.label-elem.error .input-wrapper::after {
  content: "!";
  position: absolute;
  right: 8px;
  top: 12px;
  @apply w-5 h-5 bg-red-500 rounded-full text-center font-bold text-white;
}

.label-elem .helper {
  @apply px-2 text-neutral-500;
}

.label-elem.error .helper {
  @apply px-2 text-red-500;
}

label div {
  @apply py-1 font-medium;
}

.input-text {
  @apply py-2 px-4 border rounded w-full capitalize;
}

.input-select {
  @apply py-2 px-4 border rounded w-full capitalize;
}

.radio-label {
  @apply py-1 font-medium;
}

.radio-item input {
  @apply mr-1;
}

.premium-wrapper {
  @apply flex flex-col items-center w-full py-4 px-8 rounded-2xl text-white;
  background: #1D479B;
}

.premium-score {
  @apply text-3xl font-medium;
}
</style>
