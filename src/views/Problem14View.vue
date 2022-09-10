<template>
  <div class="prob14"></div>
</template>

<script>
import jsonfile from "@/assets/jsonfile.json";

export default {
  name: "Problem14View",
  components: {},
  data() {
    return {
      products: JSON.parse(JSON.stringify(jsonfile)),
    };
  },
  mounted() {
    this.getChildren(this.products);
  },
  methods: {
    getChildren(arr) {
      arr.map((product) => {
        console.log(product.name);
        if (product.children.length != 0) {
          this.getChildren(product.children);
        }
      });
    },
  },
};
</script>
