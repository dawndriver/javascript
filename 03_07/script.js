/**
 * Create a Backpack object.
 */

const bubbletea = {
  name: "black milk tea",
  volume: {
    small: 250,
    medium: 400,
    large: 500,
  },
  sugar: {
    less: "25%",
    half: "50%",
    full: "100%",
  },
  addBubble: false,
  toggleLid: function (bubble) {
    this.addBubble = bubble;
  },
};

console.log("The bubbletea object:", bubbletea);
