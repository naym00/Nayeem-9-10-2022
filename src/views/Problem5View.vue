<template>
  <div class="prob5"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Problem5View",
  components: {},
  data() {
    return {
      negativeNumber: [],
      numbers2: [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0],
    };
  },
  mounted() {
    this.getNegativeNumber();
  },
  methods: {
    getNegativeNumber() {
      this.numbers2.filter((number) => {
        if (number < 0) {
          this.negativeNumber.push(number);
        }
      });
      console.log(this.negativeNumber);
    },
  },
};
</script>
