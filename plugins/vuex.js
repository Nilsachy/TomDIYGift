import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      questions: ["Where did we smoke weed the first time you came to visit us in The Netherlands?", 
      "What were our friends preparing in the kitchen when they only invited Nils to join when you first came to visit us in tsh Delft?",
      "What was Kaja (your girlfriend) wearing when you first came to visit us in tsh Delft?", 
      "What shoes didn’t allow you to enter beach club in Cannes?", 
      "What ingredient was part of the filling of your (not so) vegetarian tortellini in Monaco?",
      "In what town did we sleep on the way to the aqua park in Germany for Kaja’s bday?", 
      "What was the main ingredient of Kajas birthday cake in Frankfurt?", 
      "How many correct answers did Nils have on the wine blind test?", 
      "What was the name on the label of the cheapest wine in our wine blind test?", 
      "What was the name of the cake we were searching for in a small town of Gengenbach?",
      "What was the name of a coffee place we were let in and could have nice midday coffee in Monaco?",
      "Which ingredient you learned you dislike in St Tropez restaurant?", 
      "Where did we meet up in Warsaw to tell you the story of Kaja W getting drugged at the party?", 
      "What sweet filling did we have for pierogis during pierogi night?",
      "What one crucial item we we’re missing for making pierogis and we found it in polish person’ house in the Alps?", 
      "What is the title of Nils’ forever fav song?", 
      "What do we drink when in St Tropez?", 
      "What were some of our activities when you visited us in Delft?", 
      "With what food did we welcome you on your first night in France?",
      "(Tomek) What did you like the most about our latest trip to the Netherlands?"],
      answers: [["Museumpark", "Vondelpark", "Rembrandtplein", "Behind the trash container"], 
      ["French oignon soup", "Pizza", "Space brownies", "Space cookies"], 
      ["Floral pattern dress", "Ugly christmas sweater", "Gym outfit", "Pink hoodie"], 
      ["High heels", "Moon boots", "Timberlands", "Flip flops"], 
      ["Mortadella", "Goat cheese", "Bacon", "Prosciutto"], 
      ["Frankfurt", "Cologne", "Hamburg", "Freiburg im Breisgau"], 
      ["Sugar", "Strawberries", "Love", "Butter"], 
      ["0", "1", "2", "3"], 
      ["Blanc de Blanc", "Blanc de Vin", "Vin de Blanc", "Vin de Vin"], 
      ["Apple cake", "Black Forrest cake", "German plum cake", "Butterkuchen"], 
      ["Café de Paris", "Starbucks", "Hôtel de Paris", "Au Gâteau des Rois"], 
      ["Rosé", "Mortadella", "Broccoli", "Truffles"],
      ["Charlotte Menora", "Zagrywki", "Zamieszanie", "Charlotte Bulion"], 
      ["Peach and raspberry", "Nutella and bananas", "We didn’t have sweet pierogis", "White chocolate and raspberry"], 
      ["Sour cabbage", "Flour", "Wooden roller", "Pierogi shaper"],
      ["Te amo", "Do Milówki wróć", "Bande organisée", "No diggity"], 
      ["Pina colada", "Rosé", "Prosecco", "Champagne"], 
      ["Painting benches", "Boat canal trip", "Bike touring through Delft", "Group cheating on your online test"],
      ["Goat cheese pumpkin risotto", "Spaghetti alio olio", "Ravioli with ricotta and spinach", "We were too late and had to skip the supper"],
      ["The weather", "The food", "Szkoda you didn't join", "The wine"]],
      correctAnswers: ["Vondelpark", 
      "Space cookies", 
      "Floral pattern dress", 
      "Flip flops", 
      "Mortadella", 
      "Freiburg im Breisgau", 
      "Butter", 
      "0", 
      "Blanc de Blanc", 
      "Black Forrest cake", 
      "Starbucks", 
      "Truffles", 
      "Charlotte Bulion", 
      "Peach and raspberry", 
      "Wooden roller", 
      "Bande organisée", 
      "Rosé", 
      "Group cheating on your online test", 
      "Goat cheese pumpkin risotto", 
      "Szkoda you didn't join"],
      answersGiven: ["", "", "", "", "", "", "", "", ""]
    };
  },
  mutations: {
    setAnswer(state, indexedAnswer) {
      state.answersGiven[indexedAnswer.index-1] = indexedAnswer.answer;
      console.log(state.answersGiven);
    },
  },
  getters: {
    getQuestion: (state) => (index) => {
      return state.questions[index-1];
    },
    getAnswers: (state) => (index) => {
      return state.answers[index-1];
    },
    getResults: (state) => {
      let correctAnswers = 0;
      for (let i = 0; i < state.answersGiven.length; i++) {
        if (state.answersGiven[i] == state.correctAnswers[i]) {
          correctAnswers++;
        }
      }
      return correctAnswers;
    }
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
