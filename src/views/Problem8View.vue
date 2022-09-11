<template>
    <div class="prob8">
      <PrintTable :tableHeader="['A', 'B', 'C']" :tableContent="['1', '2', '3']"></PrintTable>
      {{sortedProducts}}
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  import PrintTable from '../components/PrintTable.vue';
  
  
  export default {
    name: 'Problem8View',
    components: {
      PrintTable,
    },
  data() {
    return {
      tableHeader: ['Name', 'Price', 'Brand', 'Average Rating', 'User Count', 'Discount'],
      tableContent: [],
      sortedProducts: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.descendingOrder();
  },
  methods: {
    descendingOrder() {
      this.sortedProducts = this.products.sort((product1, product2) => product2.price -  product1.price);
      console.log(this.sortedProducts);
    },
  },
  }
  </script>
  