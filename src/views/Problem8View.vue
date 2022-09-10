<template>
    <div class="prob8">
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  
  
  export default {
    name: 'Problem8View',
    components: {},
  data() {
    return {
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
  