<script setup>
import { storeToRefs } from 'pinia'
import { useInsuranceStore } from '../stores/insurance'

const ins = useInsuranceStore();
const { name, age, location, pack, premium, currency } = storeToRefs(ins);
const { getCurrency, getPricing, getSSafeAdd, getSafeAdd} = ins;
</script>

<template>
  <main>
    <div>Insurance Form</div>

    <form @submit.prevent="checkAge">
      <label class="label-elem">
        <div>Name</div>
        <input class="input-text" type="text" v-model="name" placeholder="your name" />
      </label>
      <label class="label-elem">
        <div>Age</div>
        <input type="text" class="input-text" v-model.number="age" placeholder="your age" />
        <small id="age-helper">{{helperMsg}}</small>
      </label>
      <label class="label-elem">
        <div>Where do you live</div>
        <select class="input-select" name="place" v-model="location">
          <option disabled value=0>Please Select One</option>
          <option value=1>Hong Kong</option>
          <option value=2>USA</option>
          <option value=3>Australia</option>
        </select>
      </label>
      <div class="flex flex-col label-elem">
        <div class="radio-label">Package Type</div>
        <div class="radio-item">
          <input type="radio" v-model="pack" id="standardPack" value="Standard" />
          <label for="standardPack">Standard</label>
        </div>
        <div class="radio-item">
          <input type="radio" v-model="pack" id="safePack" value="Safe" />
          <label for="safePack">Safe (+{{ getSafeAdd(age, location) + ' ' + currency }})</label>
        </div>
        <div class="radio-item">
          <input type="radio" v-model="pack" id="superSafePack" value="Super Safe" />
          <label for="superSafePack">Super Safe (+{{ getSSafeAdd(age, location) + ' ' + currency }})</label>
        </div>
      </div>
      <div>
        your premium is: {{ getPricing(age, location, pack) + ' ' + getCurrency(location) }}
      </div>
     <input type="submit" value="Check Price">
    </form>

    <nav class="space-x-2">
      <router-link to="/">Back</router-link>
      <router-link to="/result" @click="submit">Next</router-link>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      helperMsg: 'Input your age, max 100'
    }
  },
  methods: {
    checkAge() {
      if( this.age >100) {
        this.helperMsg = 'Invalid age, max 100'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-4xl font-medium mb-4 text-neutral-900;
}

.label-elem {
  @apply flex flex-col mb-4;
}

.label-elem small {
  @apply px-2 text-neutral-500
}

label div {
  @apply py-1 text-sm font-medium;
}

.input-text {
  @apply py-2 px-4 border rounded w-2/3 capitalize;
}

.input-select {
  @apply py-2 px-4 border rounded w-2/3 capitalize;
}

.radio-label {
  @apply py-1 text-sm font-medium;
}

.radio-item input {
  @apply mr-1;
}
</style>
