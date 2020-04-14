<template>
	<div id="EditBusiness">
        <form @submit.prevent>
            <div id="inputList">
                <div>Name: <input type="text" ref="name" :value="companies[selectedCompany].name"/> <br/></div>
                <div>ID: <input type="text" ref="id" :value="companies[selectedCompany].id" disabled/> <br/></div>
                <div>Issue Count: <input type="text" ref="issues" :value="companies[selectedCompany].issues"/> <br/></div>
                <div>Project Count: <input type="text" ref="projects" :value="companies[selectedCompany].projects"/> <br/></div>
                <div>Custom Field Count: <input type="text" ref="customFields" :value="companies[selectedCompany].customFields"/> <br/></div>
                <div>Licensed User Count: <input type="text" ref="licensedUsers" :value="companies[selectedCompany].licensedUsers"/> <br/></div>
                <div>Issue Type Count: <input type="text" ref="issueTypes" :value="companies[selectedCompany].issueTypes"/> <br/></div>
                <div>Status Count: <input type="text" ref="statuses" :value="companies[selectedCompany].statuses"/> <br/></div>
                <div>Attachment Count: <input type="text" ref="attachments" :value="companies[selectedCompany].attachments"/> <br/></div>
                <div>Resolution Count: <input type="text" ref="resolutions" :value="companies[selectedCompany].resolutions"/> <br/></div>
                <div>Workflow Count: <input type="text" ref="workflows" :value="companies[selectedCompany].workflows"/> <br/></div>
                <div>Comments Count: <input type="text" ref="comments" :value="companies[selectedCompany].comments"/> <br/></div>
            </div>
            <input v-if="selectedCompany" type="submit" v-on:click="editBusiness" value="Submit Edit"/>
            <input v-if="selectedCompany" type="submit" v-on:click="deleteBusiness" value="Delete Business"/>
            <input v-if="!selectedCompany" type="submit" v-on:click="createBusiness" value="Submit New Business"/>
        </form>
	</div>
</template>

<script>
//import CompanySelection from "../components/CompanySelection.vue"
import axios from 'axios';

export default {
    name: "EditBusiness",
    props: {
        companies: Object,
        selectedCompany: Number,
    },
    mounted() {
    },
    methods: {
        async editBusiness() {
            try {
                await axios.put("/businesses/" + this.$refs.id.value, {
                    name: this.$refs.name.value,
                    id: this.$refs.id.value,
                    issues: this.$refs.issues.value,
                    projects: this.$refs.projects.value,
                    customFields: this.$refs.customFields.value,
                    licensedUsers: this.$refs.licensedUsers.value,
                    issueTypes: this.$refs.issueTypes.value,
                    statuses: this.$refs.statuses.value,
                    attachments: this.$refs.attachments.value,
                    resolutions: this.$refs.resolutions.value,
                    workflows: this.$refs.workflows.value,
                    comments: this.$refs.comments.value,
                });
                this.$root.$emit('callGetBusinesses');
                this.$forceUpdate();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBusiness() {
            try {
                console.log(this.$root.$data.selectedCompany)
                delete this.$root.$data.companies[this.$root.$data.selectedCompany];
                this.$root.$emit('selectCompanySelection', 0)
                await axios.delete("/businesses/"+this.$refs.id.value);
                this.$root.$emit('callGetBusinesses');
                this.$forceUpdate();
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        async createBusiness() {
            try {
                await axios.post("/businesses", {
                    name: this.$refs.name.value,
                    id: this.$refs.id.value,
                    issues: this.$refs.issues.value,
                    projects: this.$refs.projects.value,
                    customFields: this.$refs.customFields.value,
                    licensedUsers: this.$refs.licensedUsers.value,
                    issueTypes: this.$refs.issueTypes.value,
                    statuses: this.$refs.statuses.value,
                    attachments: this.$refs.attachments.value,
                    resolutions: this.$refs.resolutions.value,
                    workflows: this.$refs.workflows.value,
                    comments: this.$refs.comments.value,
                });
                this.$root.$emit('callGetBusinesses');
                this.$forceUpdate();
                return true;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>
@media screen and (max-width: 540px) {
    input[type=text] {
        width: 100%;
    }
}
#inputList {
    margin: 20px 0px;
    background-color: #cccccc;
    font-weight: bold;
    overflow: scroll;
    height: 300px;
}
:disabled {
    opacity: 0.5;
}
form {
    /*display: flex;
    flex-wrap: wrap;
    justify-content: space-between;*/
}
form div {
    text-align: left;
    padding: 15px 30px;
}
input {
    font-size: 15px;
}
input[type=submit] {
    -webkit-appearance: none;
    font-weight: bold;
    border-radius: 5px;
    padding: 5px 15px;
    margin: auto 10px 85px 10px;
}
</style>
