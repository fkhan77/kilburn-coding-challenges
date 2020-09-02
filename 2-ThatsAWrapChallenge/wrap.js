const fs = require("fs");

function wrap() {
  let text = fs.readFileSync("./input.txt").toString();
  let result = text.match(/.{1,32}(?<=\s|\S-)/g).reduce((acc, cur) => {
    return cur.length === 32 ? acc + 1 : acc;
  }, 0);
  console.log(result);
}

wrap();
