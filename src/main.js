import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// const dictionaryAPIurl =
// "https://s3-eu-west-1.amazonaws.com/hungarian.phrasebook/example_get_entities.json";
// const requestInitData = {
//   method: "GET",
//   mode: "no-cors"
//   // credentials: "include"
// };
// const request = new Request(dictionaryAPIurl, requestInitData);
// const requestOptions = { credentials: "omit" };

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  mounted() {
    // TO DO: move and import this fn
    // fetch(dictionaryAPIurl, {
    //   method: "GET",
    //   mode: "no-cors",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Content-Type": "application/json"
    // }
    // fetch(request)
    // .then(data => {
    //   // eslint-disable-next-line
    //   debugger;
    //   console.log(data.JSON());
    //   return data;
    // })
    // .then(response => {
    //   debugger;
    //   return response.json().then(parsedJSON => {
    //     parsedJSON
    //       ? console.log("parsed ", parsedJSON)
    //       : console.log(" ampty");
    //     return parsedJSON;
    //   });
    // })
    // .then(response => (this.api = response))
    // .catch(err => console.log("err: ", err));
    // axios
    // .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    // .then(response => (this.info = response));
  }
}).$mount("#app");
