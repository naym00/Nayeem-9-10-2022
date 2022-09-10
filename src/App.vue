<template>
  <div id="app">
    <nav class="container">
      <router-link to="/">Home</router-link>
      <router-link to="/prob1">Prob 1</router-link>
      <router-link to="/prob2">Prob 2</router-link>
      <router-link to="/prob3">Prob 3</router-link>
      <router-link to="/prob4">Prob 4</router-link>
      <router-link to="/prob5">Prob 5</router-link>
      <router-link to="/prob6">Prob 6</router-link>
      <router-link to="/prob7">Prob 7</router-link>
      <router-link to="/prob8">Prob 8</router-link>
      <router-link to="/prob9">Prob 9</router-link>
      <router-link to="/prob10">Prob 10</router-link>
      <router-link to="/prob11">Prob 11</router-link>
      <router-link to="/prob12">Prob 12</router-link>
      <router-link to="/prob13">Prob 13</router-link>
      <router-link to="/prob14">Prob 14</router-link>
      <router-link to="/prob15">Prob 15</router-link> 

    </nav>
    <h1 style="text-align:center;">Check In Console</h1>
    <router-view/>
  </div>
</template>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
