<template>
  <div class="maincontainer">
    <sui-card class="raised centered card">
      <sui-card-content class="card__front orange">
        <sui-card-header>Cute Dog</sui-card-header>
        <h1>Front of Card</h1>
        <p>Front...</p>
      </sui-card-content>
      <sui-card-content extra class="card__back blue">
        <sui-card-header>Translation</sui-card-header>
        <p>Translation...</p>
        <sui-button basic positive @click="handleCorrectAnswer"
          >Correct</sui-button
        >
        <sui-button basic negative>Wrong</sui-button>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    // word: String,
    // translation: String
    entity: Object
  },
  methods: {
    handleCorrectAnswer: () => {
      console.log("debug📍: SingleCard 33");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./SingleCard.scss" lang="scss"></style>
