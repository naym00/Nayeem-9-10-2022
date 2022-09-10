<template>
  <div class="prob9"></div>
</template>

<script>
import productsfile from "@/assets/products.json";

export default {
  name: "Problem9View",
  components: {},
  data() {
    return {
      newProductArray: [],
      products: JSON.parse(JSON.stringify(productsfile)),
    };
  },
  mounted() {
    this.addDiscountField();
  },
  methods: {
    addDiscountField() {
      this.newProductArray = this.products.map((item) =>
        Object.assign(
          {
            discounted_price: (
              ((100 - parseInt(item.discount)) * item.price) /
              100
            ).toFixed(2),
          },
          item
        )
      );
      console.log(this.newProductArray);
    },
  },
};
</script>

//console.log(newObject);
