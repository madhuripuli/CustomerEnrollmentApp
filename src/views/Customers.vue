<template>
  <div>
    <AddCustomer @customer-added="addCustomerToList" />
    
    <CustomerList :datalist="customers" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import CustomerList from "../components/CustomerList";

import AddCustomer from "../components/AddCustomer";

export default {
  name: "customers",
  components: {
    CustomerList,
    AddCustomer
  },
  data() {
    return {
      customers: JSON.parse(window.localStorage.getItem('custData'))
    };
  },
  methods: {
    addCustomerToList(customerData) {
      this.customers.push(customerData);
      window.localStorage.setItem('custData',JSON.stringify(this.customers))
    },
  },
};
</script>