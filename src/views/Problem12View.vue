<template>
    <div class="prob12">
    </div>
  </template>
  
  <script>
  import productsfile from "@/assets/products.json";
  
  
  export default {
    name: 'Problem12View',
    components: {},
  data() {
    return {
      FilterediPhones: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.getFilterediPhones();
  },
  methods: {
    getFilterediPhones() {
      this.FilterediPhones = this.products.filter(product => product.price<500)
      console.log(this.FilterediPhones);
    },
  },
  }
  </script>
  