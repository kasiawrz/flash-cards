<template>
  <div id="app">
    <CardPage msg="HEEEEY There" />
    <SingleCard />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/card-page/HelloWorld.vue";
import CardPage from "./components/card-page/CardPage.vue";
import SingleCard from "./components/card-page/SingleCard.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CardPage,
    SingleCard
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
