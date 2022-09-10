<template>
    <div class="prob2">
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'Problem2View',
    components: {
    },
    data(){
      return{
        numbers: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
      }
    },
    mounted() {
      this.ascendingOrder();
    },
    methods: {
      ascendingOrder(){
        console.log(this.numbers.sort((first, second) => first - second));
      }
    }
  }
  </script>
  