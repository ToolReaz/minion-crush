/*
In this file you can modify the things your minion will answere when you speak to it
You will need to add key/value pair
A key is they word or sentence the player will say to the minion
A value is the minion's answere to it's related key
To add key/value pair, follow the example bellow

MATCH answeres will be printed if the input 100% match the key
CONTAIN answeres will be printed if the input contain the key
*/

export const SENTENCES = {
  SPEAK: {
    MATCH: [
      { input: "key", response: "value" },
      { input: "foo", response: "bar" },
      { input: "hello world", response: "Hey ! What's up ?" },
      { input: "array", response: ["index 1", "index 2", "index 3"] },
      {
        input: "a",
        response: {
          20: "20%",
          50: "60%",
          30: "30%",
        },
      },
    ],

    CONTAIN: [{ input: "ahah", response: "Yeah it was fun !" }],
  },

  HEALTH: {
    MATCH: [
      { input: "hurt", response: "Ouch !", coef: -50 },
      { input: "love", response: "Thanks <3", coef: +50 },
    ],

    CONTAIN: [{ input: "hug", response: "Come on !", coef: 1.2 }],
  },

  FOOD: {
    MATCH: [],

    CONTAIN: [
      { input: "pizza", response: "Miam ! I love pizza :)", coef: +25 },
    ],
  },

  HUMOR: {
    MATCH: [{ input: "Bouh", response: "You scared me :(", coef: 0.8 }],

    CONTAIN: [],
  },

  DEFAULTS: [
    "Error 404",
    "I didn't understand...",
    "Sorry, can you repeat please ?",
  ],
};
