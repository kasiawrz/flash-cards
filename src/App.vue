<template>
  <div id="app">
    <CardPage msg="HEEEEY There" />
    <SingleCard />
  </div>
</template>

<script>
import CardPage from "./components/card-page/CardPage.vue";
import SingleCard from "./components/card-page/SingleCard.vue";

export default {
  name: "app",
  components: {
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
