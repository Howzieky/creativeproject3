<template>
  <div class="view">
  	<CompanySelection :companies="companies" :selectedCompany="selectedCompany"/>
	<CompanyData :companies="companies" :selectedCompany="selectedCompany"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from "@/components/Home.vue";
import CompanyData from "../components/CompanyData.vue"
import CompanySelection from "../components/CompanySelection.vue"

export default {
  name: "View",
  computed: {
  	companies() {
	  return this.$root.$data.companies;
	},
    selectedCompany() {
  	  return this.$root.$data.selectedCompany;
  	}
  },
  components: {
    CompanyData,
	CompanySelection
  }
};
</script>
