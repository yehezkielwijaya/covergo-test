<script setup> 
import { storeToRefs } from 'pinia'
import { useInsuranceStore } from '../stores/insurance'

const ins = useInsuranceStore();
const { name, age, location, pack, premium, currency } = storeToRefs(ins);
const { getCurrency, getPricing, getSSafeAdd, getSafeAdd} = ins;
</script>

<template>
  <main>
    <div>Result View</div>
    
    <div class="flex flex-col">
      <h1>Summary</h1>
      <div>Name: {{ name }}</div>
      <div>Age: {{ age }}</div>
      <div>Domicile: {{ location === '1' ? 'Hong Kong' : location === '2' ? 'USA' : 'Australia' }}</div>
      <div>Package Type: {{ pack }}</div>
      <div>Premium: {{ premium + ' ' + currency }}</div>
    </div>

    <nav class="navigations">
      <router-link to="/form">Back</router-link>
      <router-link to="/" class="primary">Finish</router-link>
    </nav>
  </main>
</template>


<style>

</style>