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
import * as APIresponse from "../../assets/APIresponse.json";

const cardsData = APIresponse.default;

export default {
  name: "SingleCard",
  props: {
    word: String,
    translation: String
  },
  computed: {
    handleCorrectAnswer: () => {
      console.log("debug📍: SingleCard 33", cardsData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/* THE MAINCONTAINER HOLDS EVERYTHING */
.maincontainer {
  position: absolute;
  width: 250px;
  height: 320px;
  background: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* THE CARD HOLDS THE FRONT AND BACK FACES */
.card {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

/* THE PSUEDO CLASS CONTROLS THE FLIP ON MOUSEOVER AND MOUSEOUT */
.card:hover {
  transform: rotateY(180deg);
}

/* THE FRONT FACE OF THE CARD, WHICH SHOWS BY DEFAULT */
.card__front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #ffc728;
  color: #000;
}

/* THE BACK FACE OF THE CARD, WHICH SHOWS ON MOUSEOVER */
.card__back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  overflow: hidden;
  background: #fafafa;
  color: #333;
  text-align: center;
  transform: rotateY(180deg);
}

/*This block (starts here) is merely styling for the flip card, and is NOT an essential part of the flip code */
.card__front h1,
.card__back h1 {
  font-family: "zilla slab", sans-serif;
  padding: 30px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.card__front p,
.card__back p {
  font-family: "zilla slab", sans-serif;
  padding: 30px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
}
</style>
