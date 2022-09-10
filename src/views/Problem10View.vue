<template>
    <div class="prob10">
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  
  
  export default {
    name: 'Problem10View',
    components: {},
  data() {
    return {
      sortedProductArray: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.addDiscountField();
  },
  methods: {
    addDiscountField() {
      this.sortedProductArray = this.products.map((item) => (Object.assign({discounted_price: (((100-parseInt(item.discount))*(item.price))/100).toFixed(2)}, item))).sort((product1, product2) => product2.discounted_price -product1.discounted_price)
      console.log(this.sortedProductArray);
    },
  },
  }
  </script>
  