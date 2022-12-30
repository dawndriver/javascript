/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
const Lcolor = "green";
const content = document.createElement("ul");
const innerContent = `
<li>color : ${Lcolor}</li>
`;
content.innerHTML = innerContent;

const fun1 = function (color) {
  console.log("color before: ", this.Lcolor);

  this.Lcolor = color;
  console.log("color after: ", this.Lcolor);
};

console.log(fun1("yellow"));
