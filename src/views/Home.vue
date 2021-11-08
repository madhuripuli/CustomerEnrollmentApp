<template>
  <div>
    <h1>Welcome Admin</h1>
    <h4>Ensure you have admin rights to add customer</h4>
    
    <p>
        <label for="username">UserName : </label>
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
          placeholder="Enter UserName"
        />
      </p>
   
      <p><label for="username">Password : </label>
       <input :type="passwordFieldType" v-model="password" placeholder="Enter Password"> 
   </p>
     
      <button type="submit" v-on:click="login()" > Login </button>
      
  </div>
  <div>
    <p>Click on 'Customers' to view existing Customers</p>
    <p>Click on 'Add Customer' to add new Customer</p>
    
  </div>
   
</template>

<script>
export default {
  data() {
    return {
      password: "",
      passwordFieldType: "password"
    };
  },
  methods: {
    login() {
                if(this.username != "" && this.password != "") {
                    this.$router.replace({ name: "Customers" });
                } else {
                    console.log("A username and password must be present");
                     alert("A username and password must be present");

                }
            }
  }
};
</script>

<style scoped>
h1,h3,h4{
  color: black;
}
label{
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
font-size:x-large;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  font-size: 15px;
  border-radius: 10px;
   margin-top: 10px;
   margin-left: 70px;
}
p{
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>




