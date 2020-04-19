<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>CARDS</div>
    <SingleCard v-for="entity in cards" :key="entity.id" />
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";
import * as APIresponse from "../../assets/APIresponse.json";

export default {
  name: "CardPage",
  components: { SingleCard },
  data: () => {
    const cards = APIresponse.default;
    console.log("debug📍: CardPage 18", cards);
    return { cards };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
