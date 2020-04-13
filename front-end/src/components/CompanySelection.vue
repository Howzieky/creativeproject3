<template>
	<div id="companyData">
		<h2>Select a Company</h2>
		<div class="companyButtons">
            <div class="companyButton newBtn" v-if="newCompanyBtn" @click="select(0)" id="button0">
                Add New Business
            </div>
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
        selectedCompany: Number,
        newCompanyBtn: Boolean
    },
    mounted() {
        document.getElementById("button" + this.selectedCompany).classList.toggle("selected");
    },
    methods: {
        async select(id) {
            document.getElementById("button" + this.selectedCompany).classList.toggle("selected");
            this.$root.$data.selectedCompany = id;
            document.getElementById("button" + id).classList.toggle("selected");
        },
        htmlID(id) {
            return "button" + id;
        },
    },
    computed: {
        companies() {
            var list = [];
            for (var company in this.$root.$data.companies) {

                if (this.$root.$data.companies[company].id != 0) {
                    
                    list.push(this.$root.$data.companies[company])
                }
            }
            return list;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 540px) {
	.companyButtons {
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
	.companyButton {
		margin-bottom: 10px;
	}
}
@media screen and (min-width: 541px) {
	.companyButtons {
		justify-content: space-around;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		max-width: 90%;
	}
	.companyButton {
		width: 15%;
	}
}

.selected {
	border: 2px solid white;
    box-shadow: 0 0 15px #88aadd;
	background-color: #CDEFFF !important;
}
.companyButton:not(.selected) {
	border: 2px solid white;
}
.companyButtons {
	display: flex;
}
.companyButton {
	background-color: lightblue;
	padding: 5px 20px 5px 20px;
	border-radius: 10px;
	cursor: pointer;
}
.newBtn {
    background-color: lightgreen;
}
.newBtn.selected {
    border: 2px solid white;
    box-shadow: 0 0 15px green;
	background-color: #b0ffb0 !important;
}
h3 {
  margin: 40px 0 0;
}
</style>
