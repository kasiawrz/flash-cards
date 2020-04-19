<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>CARDS</div>
    <!-- <SingleCard v-for="entity in formatedCards" :key="entity.id" /> -->
    <SingleCard />
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";
import * as APIresponse from "../../assets/APIresponse.json";

export default {
  name: "CardPage",
  components: { SingleCard },
  data: () => {
    const languageNative = "en";
    const languageToLearn = "es";
    const cards = APIresponse.default;
    // TO DO: filter by content type
    const getFrontAndBackCard = card => {
      let frontCard = null;
      let backCard = null;

      card.representations.forEach(repr => {
        if (repr.type !== "text") return;

        if (repr.language.indexOf(languageNative) === 0) {
          frontCard = repr.content;
        } else if (repr.language.indexOf(languageToLearn) === 0) {
          backCard = repr.content;
        }
      });

      return frontCard && backCard && { frontCard, backCard };
    };

    const formatedCards = cards.map(getFrontAndBackCard);
    console.log("debug📍: CardPage 18", formatedCards);
    return { cards: formatedCards };
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
