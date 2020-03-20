<template>
  <div class="view">
	<CompanyData :companies="companies" :selectedCompany="selectedCompany"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from "@/components/Home.vue";
import CompanyData from "../components/CompanyData.vue"

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
    CompanyData
  }
};
</script>
