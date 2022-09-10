<template>
  <div class="prob4"></div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'Problem4View',
    components: {
    },
    data(){
      return{
        numbers: [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10],
        uniqNumber: [],
      }
    },
    mounted() {
      this.getUnique();
    },
    methods: {
      getUnique(){

        this.numbers.filter(number => {
          if(this.uniqNumber.indexOf(number) === -1){
            this.uniqNumber.push(number);
          }
        })
        console.log(this.uniqNumber);
      }

    }
  }
</script>
