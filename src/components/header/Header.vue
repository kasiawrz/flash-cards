<template>
  <header>
    <h1>LANGUAGE FLASH CARDS</h1>
    <Counter />
  </header>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  name: "Header",
  components: { Counter }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
