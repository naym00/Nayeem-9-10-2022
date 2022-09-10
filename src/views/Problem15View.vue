<template>
  <div class="prob15"></div>
</template>

<script>
// @ is an alias to /src
import jsonfile from "@/assets/jsonfile.json";

export default {
  name: "Problem15View",
  components: {},
  data() {
    return {
      parents: [],
      products: JSON.parse(JSON.stringify(jsonfile)),
    };
  },
  mounted() {
    this.getParent(this.products);
    this.printParent();
  },
  methods: {
    getParent(arr) {
      arr.map((product) => {
        if (product.children.length != 0) {
          this.getParent(product.children);
          this.parents.push(product.name);
        }
      });
    },
    printParent(){
      console.log(this.parents)
      console.log('Total Count: ', (this.parents).length);
    }
  },
};
</script>
