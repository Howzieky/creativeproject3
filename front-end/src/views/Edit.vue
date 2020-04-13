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
import axios from 'axios';


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
    methods: {
        async getTickets() {
            try {
                let response = await axios.get("/");
                console.log(response);
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTicket(ticket) {
            console.log(ticket);
            try {
                await axios.delete("/");
                return true;
            } catch (error) {
                console.log(error);
            }
        }
    },
    components: {
        EditData,
        CompanySelection
    }
};
</script>
