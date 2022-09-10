<template>
  <div class="prob6"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Problem6View",
  components: {},
  data() {
    return {
      numbers2: [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0],
    };
  },
  mounted() {
    this.divisibleBy10();
  },
  methods: {
    divisibleBy10() {
      console.log(this.numbers2.filter((number) => number % 10 == 0));
    },
  },
};
</script>
