<template>
  <div class="userDetails">
  <div v-if="!found">"Customer Not Found"</div>
  <div id="customer" v-if="customer">
      <table style="width:100%" BORDER="4"> 
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Organization</th>
        </tr>
        <tr>
          <th>{{ customer.name }}</th>
          <td>{{ customer.gender }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.organization }}</td>
        </tr>
      </table>
      <router-link to="/customers">Back to Customers</router-link>
  </div>
  </div>
</template>

<script>
export default{
    name: "CustomerDetails",
    data() {
        return {
            found: false,
            id : 0,
            customer: {}
        }
    },
    mounted(){
        this.id = Number.parseInt(this.$route.params.id)
        this.customer = JSON.parse(window.localStorage.getItem('custData')).find(x => x.id === Number.parseInt(this.$route.params.id))
        if(this.customer)
        {
            this.found = true
        }
    }
};
</script>
<style>
tr{
color: black;
}

</style>
