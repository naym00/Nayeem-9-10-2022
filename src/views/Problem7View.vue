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
      vowelCount: 0,
      demoStr: 'How are you',
    };
  },
  mounted() {
    this.numbersOfVowel();
  },
  methods: {
    numbersOfVowel() {
      [...this.demoStr].forEach(eachChar => {
        if (
          eachChar == "a" ||
          eachChar == "e" ||
          eachChar == "i" ||
          eachChar == "o" ||
          eachChar == "u" ||
          eachChar == "A" ||
          eachChar == "E" ||
          eachChar == "I" ||
          eachChar == "O" ||
          eachChar == "U"
        ) {
          this.vowelCount++;
        }
      })

      console.log(this.vowelCount);
      
    },
  },
};
</script>
