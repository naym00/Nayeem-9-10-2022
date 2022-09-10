<template>
    <div class="prob13">
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  
  
  export default {
    name: 'Problem13View',
    components: {},
  data() {
    return {
      FilteredPhones: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.getFilteredPhones();
  },
  methods: {
    getFilteredPhones() {
      this.FilteredPhones = this.products.filter(product => (product.brand==='iphone' || product.brand==='samsung') && product.price>400)
      console.log(this.FilteredPhones);
    },
  },
  }
  </script>
  