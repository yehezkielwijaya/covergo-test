import { defineStore } from "pinia";

export const useInsuranceStore = defineStore({
  id: "ins",
  state: () => ({
    name: "",
    age: 0,
    location: 0,
    pack: "Standart",
    premium: 0,
    currency: "HKD",
    safeAdd: 0,
    supSafeAdd: 0,
  }),
  getters: {
  },
  actions: {
    getPricing(age, location, packType) {
      if (packType === "Standard") {
        this.premium = age * parseInt(location) * 10;
      }
      if (packType === "Safe") {
        this.premium = age * parseInt(location) * 15;
      }
      if (packType === "Super Safe") {
        this.premium = age * parseInt(location) * 17.5;
      }
      return this.premium;
    },
    getSafeAdd(age, location) {
      return (this.safeAdd = age * parseInt(location) * 5);
    },
    getSSafeAdd(age, location) {
      return (this.supSafeAdd = age * parseInt(location) * 7.5);
    },
    getCurrency(location) {
      if (location === "1") {
        this.currency = "HKD";
      }
      if (location === "2") {
        this.currency = "USD";
      }
      if (location === "3") {
        this.currency = "AUD";
      }
      return this.currency;
    },
  },
});
