<template>
    <div class="prob1">
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  
  export default {
    name: 'Problem1View',
    components: {
    },
    mounted() {
      this.oddNumbers();
    },
    methods: {
      oddNumbers(){
        Array.from({length: 100}, (_, index) => index + 1).filter(number => {if(number%2!=0){console.log(number);}});
        
      }
    }
  }
  </script>
  