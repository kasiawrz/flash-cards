<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>CARDS {{ cards }}</div>
    <!-- <SingleCard v-for="entity in formatedCards" :key="entity.id" /> -->
    <SingleCard v-bind:cards="cards[0]" />
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";
import * as APIresponse from "../../utils/APIresponse.json";

export default {
  name: "CardPage",
  components: { SingleCard },
  data: () => {
    return { cards: [] };
  },
  props: {
    msg: String
  },
  created: function() {
    this.fetchData();
  },
  computed: {
    currentCard() {
      return this.cards[this.currentCardIndex];
    }
  },
  methods: {
    fetchData: function() {
      const languageNative = "en";
      const languageToLearn = "es";
      const cards = APIresponse.default;

      const getFrontAndBackCard = card => {
        let frontCard = null;
        let backCard = null;

        card.representations.forEach(repr => {
          // TO DO: filter by content type
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

      this.cards = formatedCards;
    }
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
