<template>
  <div class="businesses">
    <CompanySelection :companies="companies" :selectedCompany="selectedCompany" :newCompanyBtn="true"/>
    <EditBusiness :companies="companies" :selectedCompany="selectedCompany"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CompanySelection from "../components/CompanySelection.vue"
import EditBusiness from "../components/EditBusiness.vue"
//import axios from 'axios';


export default {
    name: "Manage",
    computed: {
        companies() {
            return this.$root.$data.companies;
        },
        selectedCompany() {
            return this.$root.$data.selectedCompany;
        }
    },
    methods: {

    },
    components: {
        CompanySelection,
        EditBusiness
    }
};
</script>
