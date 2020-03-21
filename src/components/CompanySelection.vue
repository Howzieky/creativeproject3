<template>
	<div id="companyData">
		<h2>Select a Company</h2>
		<div class="companyButtons">
  			<div class="companyButton" v-for="company in companies" :key="company.name" @click="select(company.id)" :id=htmlID(company.id)>
				{{company.name}}
  			</div>
		</div>
	</div>
</template>

<script>
export default {
  	name: "CompanySelection",
  	props: {
    	companies: Array,
		selectedCompany: Number
  	},
    mounted() {
	console.log()
    	document.getElementById("button" + this.selectedCompany).classList.toggle("selected");
    },
	methods: {
		select(id) {
	  		document.getElementById("button" + this.selectedCompany).classList.toggle("selected");
	  		this.$root.$data.selectedCompany = id;
	  		document.getElementById("button" + id).classList.toggle("selected");
		},
		htmlID(id) {
			return "button" + id;
		},
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected {
	border: 2px solid white;
    box-shadow: 0 0 15px #88aadd;
}
.companyButton:not(.selected) {
	border: 2px solid white;
}
.companyButtons {
	margin-left: auto;
	margin-right: auto;
	margin-top: 50px;
	max-width: 90%;
	display: flex;
	justify-content: space-around;
}
.companyButton {
	background-color: lightblue;
	padding: 5px 20px 5px 20px;
	border-radius: 10px;
	cursor: pointer;
	width: 15%;
}
h3 {
  margin: 40px 0 0;
}
</style>
