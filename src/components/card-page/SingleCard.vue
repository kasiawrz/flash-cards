<template>
  <div class="maincontainer">
    <sui-card
      class="raised centered card"
      v-bind:class="{ isFlipped: isFlipped }"
    >
      <sui-card-content class="card__front orange" @click="flipCard">
        <sui-card-header> {{ frontCard.title }} </sui-card-header>
        <p>{{ frontCard.description }}</p>
        <img
          src="https://img.icons8.com/cute-clipart/64/000000/reply-arrow.png"
        />
      </sui-card-content>
      <sui-card-content extra class="card__back blue">
        <sui-card-header> {{ backCard.title }} </sui-card-header>
        <p>{{ backCard.description }}</p>
        <sui-button basic positive @click="handleAnswer(1)"
          >Correct 👍🏻</sui-button
        >
        <sui-button basic negative @click="handleAnswer(0)"
          >Wrong 🛑</sui-button
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
    currentCard: { type: Object, required: true }
  },
  data: () => {
    return {
      isFlipped: false
    };
  },
  computed: {
    frontCard: function() {
      return this.currentCard.frontCard;
    },
    backCard: function() {
      return this.currentCard.backCard;
    }
  },
  methods: {
    flipCard: function() {
      this.isFlipped = this.isFlipped ? false : true;
      console.log("debug📍: SingleCard 46", this.isFlipped);
    },
    handleAnswer: function(newPoints) {
      console.log("debug📍: SingleCard 33", newPoints);
      this.$emit("next-card", newPoints);
      this.flipCard();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./SingleCard.scss" lang="scss"></style>
