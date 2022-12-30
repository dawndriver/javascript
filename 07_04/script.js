/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let bubbletea = [
  "greentea",
  "redtea",
  "blacktea",
  "oolgtea",
  "jasiminetea",
  "lighttea",
  "darktea",
  "notea",
];

let found = bubbletea.find((element) => element == "greentea");
let index1 = bubbletea.findIndex((element) => element == "greentea");
console.log(index1);
