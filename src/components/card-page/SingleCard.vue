<template>
  <div class="maincontainer">
    <sui-card
      class="raised centered card"
      v-bind:class="{ isFlipped: isFlipped }"
    >
      <sui-card-content class="card__front orange" @click="flipCard">
        <sui-card-header>Cute Dog</sui-card-header>
        <h2>Front of Card</h2>
        <p>Front...</p>
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/reply-arrow.png"
        />
      </sui-card-content>
      <sui-card-content extra class="card__back blue">
        <sui-card-header>Translation</sui-card-header>
        <p>Translation...</p>
        <sui-button basic positive @click="handleAnswer(1)"
          >Correct 👍🏻</sui-button
        >
        <sui-button basic negative @click="handleAnswer(0)"
          >Wrong 🛑 {{ counter }}</sui-button
        >
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
// export default {
module.exports = {
  name: "SingleCard",
  props: {
    currentCard: { type: Object }, //required: true },
    counter: Number
  },
  data: () => {
    return {
      isFlipped: false
    };
  },
  computed: {},
  methods: {
    flipCard: function() {
      this.isFlipped = this.isFlipped ? false : true;
      console.log("debug📍: SingleCard 46", this.isFlipped);
    },
    handleAnswer: function(points) {
      this.flipCard();
      console.log("debug📍: SingleCard 33", points);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./SingleCard.scss" lang="scss"></style>
