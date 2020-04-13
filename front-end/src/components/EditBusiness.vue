<template>
	<div id="EditBusiness">
        <form @submit.prevent="addTicket">
            <div id="inputList">
                <div>Name: <input type="text" name="name" :value="companies[selectedCompany].name"/> <br/></div>
                <div>ID: <input type="text" name="id" :value="companies[selectedCompany].id" disabled/> <br/></div>
                <div>Issue Count: <input type="text" name="issues" :value="companies[selectedCompany].issues"/> <br/></div>
                <div>Project Count: <input type="text" name="projects" :value="companies[selectedCompany].projects"/> <br/></div>
                <div>Custom Field Count: <input type="text" name="customFields" :value="companies[selectedCompany].customFields"/> <br/></div>
                <div>Licensed User Count: <input type="text" name="licensedUsers" :value="companies[selectedCompany].licensedUsers"/> <br/></div>
                <div>Issue Type Count: <input type="text" name="issueTypes" :value="companies[selectedCompany].issueTypes"/> <br/></div>
                <div>Status Count: <input type="text" name="statuses" :value="companies[selectedCompany].statuses"/> <br/></div>
                <div>Attachment Count: <input type="text" name="attachments" :value="companies[selectedCompany].attachments"/> <br/></div>
                <div>Resolution Count: <input type="text" name="resolutions" :value="companies[selectedCompany].resolutions"/> <br/></div>
                <div>Workflow Count: <input type="text" name="workflows" :value="companies[selectedCompany].workflows"/> <br/></div>
                <div>Comments Count: <input type="text" name="comments" :value="companies[selectedCompany].comments"/> <br/></div>
            </div>
            <input v-if="selectedCompany" type="submit" value="Submit Edit"/>
            <input v-if="selectedCompany" type="submit" value="Delete Business"/>
            <input v-if="!selectedCompany" type="submit" value="Submit New Business"/>
        </form>
	</div>
</template>

<script>
export default {
    name: "CompanySelection",
    props: {
        companies: Object,
        selectedCompany: Number,
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style>
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
    margin: auto 10px;
}
</style>
