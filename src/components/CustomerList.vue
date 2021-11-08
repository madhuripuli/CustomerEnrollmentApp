<template>
  <div>
    <div class="centeralign">
      <p>This is the list of existing customers</p>
      <table style="width:100%" BORDER="4"> 
        <tr>
          <th>Name</th>
          <th>View Details</th>
        </tr>
        <tr v-for="customer in datalist"
        v-bind:key="customer.id">
          <th>{{ customer.name }}</th>
          <td><router-link :to="{name: 'CustomerDetails', params: {id: customer.id}}">view</router-link></td>
        </tr>
      </table>
    </div> 
  </div>
</template>

<script>
export default {
  name: "CustomerList",
  props:['datalist']
};
</script>

<style scoped>
.addmargin {
  margin-top: 10px;
  margin-bottom: 10px;
}

.centeralign {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

