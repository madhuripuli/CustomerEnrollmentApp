<template>
  <div id="nav">
    <img
        src="./assets/logo.png"
        width="25"
        height="25"
      />
      
    <router-link to="/">Home</router-link> |
    <router-link to="/customers">Customers</router-link> |
    
  </div>
  <router-view />

</template>

<script>
import JSONData from "./assets/sourcedata.json"


export default {
  name:"app",
    data() {
    return {
      customersData: JSONData.data
    };
  },
  mounted(){
    window.localStorage.setItem('custData',JSON.stringify(this.customersData))
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* * {
  box-sizing: border-box;
}
 */
#nav {
  padding: 10px;
  background-color: rgb(194, 62, 80);
}

#nav a {
  font-weight: bold;
  color: #162738;
}

#nav a.router-link-exact-active {
  color: #115336;
}
body {
  background-image: url('./assets/erty.jpg');
  background-image: cover;
  

}

</style>
