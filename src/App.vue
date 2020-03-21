<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/view">View Data</router-link> |
	  <router-link to="/edit">Edit Data</router-link>
    </div>
    <router-view />
	<footer id="footer">
		Github
	</footer>
  </div>
</template>

<style>
body {
	margin: 0px;
}
#app {
  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color: #c0c0c0;
  text-decoration: none;
}

footer {
	color: #c0c0c0;
	width: 100%;
	background-color: black;
	padding: 20px 0px;
	position: fixed;
  	left: 0;
  	bottom: 0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
