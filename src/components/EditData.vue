<template>
  <div>
	<ul id="editList">
		<li><span @click="incrementCounter('issues')">Add Issue ({{companies[selectedCompany].issues}})<div class="subtract" @click="decrementCounter($event, 'issues')">-</div></span></li>
		<li><span @click="incrementCounter('projects')">Add Project ({{companies[selectedCompany].projects}})<div class="subtract" @click="decrementCounter($event, 'projects')">-</div></span></li>
		<li><span @click="incrementCounter('customFields')">Add Custom Field ({{companies[selectedCompany].customFields}})<div class="subtract" @click="decrementCounter($event, 'customFields')">-</div></span></li>
		<li><span @click="incrementCounter('licensedUsers')">Add Licensed User ({{companies[selectedCompany].licensedUsers}})<div class="subtract" @click="decrementCounter($event, 'licensedUsers')">-</div></span></li>
		<li><span @click="incrementCounter('issueTypes')">Add Issue Type ({{companies[selectedCompany].issueTypes}})<div class="subtract" @click="decrementCounter($event, 'issueTypes')">-</div></span></li>
		<li><span @click="incrementCounter('statuses')">Add Status ({{companies[selectedCompany].statuses}})<div class="subtract" @click="decrementCounter($event, 'statuses')">-</div></span></li>
		<li><span @click="incrementCounter('attachments')">Add Attachment ({{companies[selectedCompany].attachments}})<div class="subtract" @click="decrementCounter($event, 'attachments')">-</div></span></li>
		<li><span @click="incrementCounter('resolutions')">Add Resolution ({{companies[selectedCompany].resolutions}})<div class="subtract" @click="decrementCounter($event, 'resolutions')">-</div></span></li>
		<li><span @click="incrementCounter('workflows')">Add Workflow ({{companies[selectedCompany].workflows}})<div class="subtract" @click="decrementCounter($event, 'workflows')">-</div></span></li>
		<li><span @click="incrementCounter('comments')">Add Comment ({{companies[selectedCompany].comments}})<div class="subtract" @click="decrementCounter($event, 'comments')">-</div></span></li>
	</ul>
  </div>
</template>

<script>
export default {
  name: "EditData",
  props: {
    companies: Array,
	selectedCompany: Number
  },
  mounted() {
	document.getElementById("editList").style.height = window.innerHeight - document.getElementById("editList").offsetTop - document.getElementById("footer").offsetHeight + "px";
  },
  methods: {
	incrementCounter(property) {
		this.companies[this.selectedCompany][property]++;
	},
	decrementCounter(e, property) {
		e.stopPropagation();
		if (this.companies[this.selectedCompany][property] > 0)
			this.companies[this.selectedCompany][property]--;
	}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* For Mobile */
@media screen and (max-width: 540px) {
	li span {
		width: 75%;
	}
}

/* For Tablets */
@media screen and (min-width: 540px){
	li span {
		width: 400px;
	}
}
.subtract {
	display: inline-block;
	padding: 0px 10px;
	font-size: 30px;
	background-color: #ff8888;
    box-shadow: 0 0 10px #ff0000;
	//border: 1px solid black;
	margin-left: 10px;
	border-radius: 10px;
	float: right;
}
.subtract:hover {
	background-color: #ffaaaa;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
  overflow-y: scroll;
  background-color: #cccccc;
  margin-bottom: 0px;
}
li {
  //display: inline-block;
  //margin-left: 10%;
  margin: 10px 10px;

  -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none;
}
li span {
	background-color: #77dd77;
    box-shadow: 0 0 5px #00ff00;
	padding: 10px;
	border-radius: 10px;
	display: flex;
    align-items: center;
	justify-content: space-between;
	cursor: pointer;
	margin-left: auto;
	margin-right: auto;
}
li span:hover {
	background-color: #aaffaa;
}
a {
  color: #42b983;
}
</style>
