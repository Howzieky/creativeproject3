<template>
  <div>
    <h2>Company Data</h2>
	<div class="companyButtons">
      <div class="companyButton" v-for="company in companies" :key="company.name" @click="select(company.id)" :id=htmlID(company.id)>
        {{company.name}}
      </div>
	</div>
	<ul>
		<li>Total Issues: {{companies[selectedCompany].issues}}</li>
		<li>Total Projects: {{companies[selectedCompany].projects}}</li>
		<li>Total Custom Fields: {{companies[selectedCompany].customFields}}</li>
		<li>Total Licensed Users: {{companies[selectedCompany].licensedUsers}}</li>
		<li>Total Issue Types: {{companies[selectedCompany].issueTypes}}</li>
		<li>Total Statuses: {{companies[selectedCompany].statuses}}</li>
		<li>Total Attachments: {{companies[selectedCompany].attachments}}</li>
		<li>Total Resolutions: {{companies[selectedCompany].resolutions}}</li>
		<li>Total Workflows: {{companies[selectedCompany].workflows}}</li>
		<li>Total Comments: {{companies[selectedCompany].comments}}</li>
	</ul>
  </div>
</template>

<script>
export default {
  name: "CompanyData",
  props: {
    companies: Array,
	selectedCompany: Number
  },
  mounted() {
  	document.getElementById("button" + this.$root.$data.selectedCompany).classList.toggle("selected");
  },
  methods: {
  	select(id) {
	  document.getElementById("button" + this.$root.$data.selectedCompany).classList.toggle("selected");
	  this.$root.$data.selectedCompany = id;
	  document.getElementById("button" + id).classList.toggle("selected");
	},
	htmlID(id) {
		return "button" + id;
	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected {
	border: 2px solid black;
}
.companyButton:not(.selected) {
	border: 2px solid white;
}
.companyButtons {
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	max-width: 70%;
	display: flex;
	justify-content: space-around;
}
.companyButton {
	background-color: lightblue;
	padding: 5px 20px 5px 20px;
	border-radius: 10px;
	cursor: pointer;
}
h3 {
  margin: 40px 0 0;
}
ul {
  margin-left: 10%;
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  //display: inline-block;
  margin: 10px 10px;
}
a {
  color: #42b983;
}
</style>
