<template>
  <div id="app">
    <Header />
    <CardPage msg="username" />
  </div>
</template>

<script>
import CardPage from "./components/card-page/CardPage.vue";
import Header from "./components/header/Header.vue";

export default {
  name: "app",
  components: {
    Header,
    CardPage
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
