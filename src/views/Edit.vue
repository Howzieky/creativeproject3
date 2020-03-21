<template>
  <div class="view">
  	<CompanySelection :companies="companies" :selectedCompany="selectedCompany"/>
	<EditData :companies="companies" :selectedCompany="selectedCompany"/>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from "@/components/Home.vue";
import EditData from "../components/EditData.vue"
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
    EditData,
	CompanySelection
  }
};
</script>
