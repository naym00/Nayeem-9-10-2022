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
      childs: [],
      products: JSON.parse(JSON.stringify(jsonfile)),
    };
  },
  mounted() {
    this.getChildren(this.products);
    this.printChild();
  },
  methods: {
    getChildren(arr) {
      arr.map((product) => {
        this.childs.push(product.name);
        if (product.children.length != 0) {
          this.getChildren(product.children);
        }
      });
    },
    printChild(){
      console.log(this.childs);
    },
  },
};
</script>
