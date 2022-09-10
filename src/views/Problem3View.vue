<template>
    <div class="prob3">
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'Problem3View',
    components: {
    },
    data(){
      return{
        numbers: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
      }
    },
    mounted() {
      this.sumNumbersReduce();
    },
    methods: {
      sumNumbersReduce(){
        console.log(this.numbers.reduce((total, item) => total+item));
      }
    }
  }
  </script>
  