<template>
  <div>
    <h3>Add Customer details here:</h3>
    <form @submit.prevent="addCustomer">
      <p>
        <label for="name">Name : </label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          placeholder="Enter Name"
        />
      </p>
      <p>
        <label for="gender">Gender : </label>
        <select id="gender" v-model="gender" placeholder="Select Gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </p>
      <p>
        <label for="email">Email : </label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </p>
      <p>
        <label for="phone">Phone : </label>
        <input
          id="phone"
          v-model="phone"
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
        />
      </p>
      <p>
        <label for="organization">Organization : </label>
        <input
          id="organization"
          v-model="organization"
          type="text"
          name="organization"
          placeholder="Enter Organization"
        />
      </p>
      <button class="button" type="submit">Add Customer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddCusotmer",
  props: [],
  data() {
    return {
      id: 0,
      name: "",
      gender: "",
      email: "",
      phone: "",
      organization: "",
    };
  },
  methods: {
    addCustomer() {
      let customer = {
        id: new Date().valueOf(),
        name: this.name,
        gender: this.gender,
        email: this.email,
        phone: this.phone,
        organization: this.organization,
      };
      this.$emit("customer-added", customer)
      this.name = 0
      this.name = ""
      this.gender=""
      this.email = ""
      this.phone = ""
      this.organization = ""
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-flex;
  justify-content:center;
  font-size: 15px;
  border-radius: 10px;
  
}

label {
  display: inline-flex;
  float: left;

  width: 150px;
  text-align: right;
}
input {
  display: inline-block;

}
select{
    width: 175px;
}
form {
  display: inline-block;
}
</style>