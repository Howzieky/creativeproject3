<template>
  <div class="home">
	<h1>Home</h1>
	<h3>It's very useful to be able to manage your company's internal structure with our software, but now we're stepping up our game! On this site, you can view this structure and make minor edits to it as well. The properties you can interact with are as follows:</h3>
	<ul>
	<li>Total Issue Count</li>
	<li>Total Project Count</li>
	<li>Total Custom Field Count</li>
	<li>Total Licensed User Count</li>
	<li>Total Issue Type Count</li>
	<li>Total Status Count</li>
	<li>Total Attachment Count</li>
	<li>Total Resolution Count</li>
	<li>Total Workflow Count</li>
	<li>Total Comment Count</li>
	</ul>
  </div>
</template>

<script>
// @ is an alias to /src
//import Home from "@/components/Home.vue";

//console.log(data);
export default {
  name: "Home",

};
</script>

<style scoped>
h3 {
	width: 70%;
	margin-left: auto;
	margin-right: auto;
}
ul {
	margin-left: auto;
	margin-right: auto;
	text-align: left;
	width: 80%;
	margin-bottom: 80px;
}
li {
	margin-bottom: 10px;
}
</style>
