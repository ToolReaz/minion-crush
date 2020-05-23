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
    ],

    CONTAIN: [{ input: "ahah", response: "Yeah it was fun !" }],
  },

  HEALTH: {
    MATCH: [
      { input: "key", response: "value" },
      { input: "foo", response: "bar" },
      { input: "hello world", response: "Hey ! What's up ?" },
    ],

    CONTAIN: [{ input: "ahah", response: "Yeah it was fun !" }],
  },

  FOOD: {
    MATCH: [
      { input: "key", response: "value" },
      { input: "foo", response: "bar" },
      { input: "hello world", response: "Hey ! What's up ?" },
    ],

    CONTAIN: [{ input: "ahah", response: "Yeah it was fun !" }],
  },

  HUMOR: {
    MATCH: [
      { input: "key", response: "value" },
      { input: "foo", response: "bar" },
      { input: "hello world", response: "Hey ! What's up ?" },
    ],

    CONTAIN: [{ input: "ahah", response: "Yeah it was fun !" }],
  },

  DEFAULTS: [
    "Error 404",
    "I didn't understand...",
    "Sorry, can you repeat please ?",
  ],
};
