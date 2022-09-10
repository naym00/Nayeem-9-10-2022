<template>
  <div class="prob7"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Problem7View",
  components: {},
  data() {
    return {
      demoStr: 'How are you',
    };
  },
  mounted() {
    this.numbersOfVowel();
  },
  methods: {
    numbersOfVowel() {
      let count = 0;
      for (let i = 0; i < this.demoStr.length; i++) {
        if (
          this.demoStr.charAt(i) == "a" ||
          this.demoStr.charAt(i) == "e" ||
          this.demoStr.charAt(i) == "i" ||
          this.demoStr.charAt(i) == "o" ||
          this.demoStr.charAt(i) == "u" ||
          this.demoStr.charAt(i) == "A" ||
          this.demoStr.charAt(i) == "E" ||
          this.demoStr.charAt(i) == "I" ||
          this.demoStr.charAt(i) == "O" ||
          this.demoStr.charAt(i) == "U"
        ) {
          count++;
        }
      }
      console.log(count);
    },
  },
};
</script>
