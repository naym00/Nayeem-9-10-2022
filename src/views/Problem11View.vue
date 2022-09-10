<template>
    <div class="prob11">
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  
  
  export default {
    name: 'Problem11View',
    components: {},
  data() {
    return {
      sortedAvgRating: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.addDiscountField();
  },
  methods: {
    addDiscountField() {
      this.sortedAvgRating = this.products.sort((product1, product2) => product2.rating.average - product1.rating.average)
      console.log(this.sortedAvgRating);
    },
  },
  }
  </script>
  