<template>
  <div>
	<ul id="viewList">
		<li><h3>Total Issues: </h3><h2>{{companies[selectedCompany].issues}}</h2></li>
		<li><h3>Total Projects: </h3><h2>{{companies[selectedCompany].projects}}</h2></li>
		<li><h3>Total Custom Fields: </h3><h2>{{companies[selectedCompany].customFields}}</h2></li>
		<li><h3>Total Licensed Users: </h3><h2>{{companies[selectedCompany].licensedUsers}}</h2></li>
		<li><h3>Total Issue Types: </h3><h2>{{companies[selectedCompany].issueTypes}}</h2></li>
		<li><h3>Total Statuses: </h3><h2>{{companies[selectedCompany].statuses}}</h2></li>
		<li><h3>Total Attachments: </h3><h2>{{companies[selectedCompany].attachments}}</h2></li>
		<li><h3>Total Resolutions: </h3><h2>{{companies[selectedCompany].resolutions}}</h2></li>
		<li><h3>Total Workflows: </h3><h2>{{companies[selectedCompany].workflows}}</h2></li>
		<li><h3>Total Comments: </h3><h2>{{companies[selectedCompany].comments}}</h2></li>
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
	document.getElementById("viewList").style.height = window.innerHeight - document.getElementById("viewList").offsetTop - document.getElementById("footer").offsetHeight + "px";
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  //margin-left: 10%;
  list-style-type: none;
  padding: 0;
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: scroll;
  background-color: #cccccc;
  margin-bottom: 0px;
}
li {
  background-color: #FFFFFF88;
  box-shadow: 0 0 10px #ffffff;
  //display: inline-block;
  margin: 10px 10px;
  //padding: 10px;
  text-align: center;
  width: 25%;
}
a {
  color: #42b983;
}
</style>
