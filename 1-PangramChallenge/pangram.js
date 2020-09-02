const fs = require("fs");

function pangram() {
  let perfectPangrams = 0;
  let nonPerfectPangrams = 0;
  let nonPangrams = 0;
  let text = fs.readFileSync("./input.txt").toString().split("\n");

  text.forEach((item) => {
    // get a-z only
    let element = item.toLowerCase().match(/[a-z]/g);

    // get distinct a-z only
    let filteredElement = element
      .filter(function (character, position, arr) {
        return arr.indexOf(character) == position;
      })
      .sort()
      .join("");

    if (filteredElement.includes("abcdefghijklmnopqrstuvwxyz")) {
      if (element.length === 26) {
        perfectPangrams += 1;
      } else {
        nonPerfectPangrams += 1;
      }
    } else {
      nonPangrams += 1;
    }
  });
  console.log(perfectPangrams * nonPerfectPangrams - nonPangrams);
}

pangram();
