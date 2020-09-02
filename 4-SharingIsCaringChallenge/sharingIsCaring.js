const fs = require("fs");
const {
  BELOW_TWENTY,
  TENS,
  TEN,
  HUNDRED,
  THOUSAND,
  MILLION,
  BILLION,
  TRILLION,
  QUADRILLION,
} = require("./numbers");
let chequeList = fs.readFileSync("./input.txt").toString().split(/\r\n/);

function getWord(number, words) {
  let word;
  if (!words) {
    words = [];
  }
  if (number === 0) {
    return words.join(" ");
  } else if (number < 20) {
    word = BELOW_TWENTY[number];
    remainder = 0;
  } else if (number < HUNDRED) {
    word = TENS[Math.floor(number / TEN)];
    remainder = Math.floor(number % TEN);
    if (remainder) {
      word += "-" + BELOW_TWENTY[remainder];
    }
    remainder = 0;
  } else if (number < THOUSAND) {
    word = getWord(Math.floor(number / HUNDRED)) + " hundred";
    remainder = number % HUNDRED;
  } else if (number < MILLION) {
    word = getWord(Math.floor(number / THOUSAND)) + " thousand";
    remainder = number % THOUSAND;
  } else if (number < BILLION) {
    word = getWord(Math.floor(number / MILLION)) + " million";
    remainder = number % MILLION;
  } else if (number < TRILLION) {
    word = getWord(Math.floor(number / BILLION)) + " billion";
    remainder = number % BILLION;
  } else if (number < QUADRILLION) {
    word = getWord(Math.floor(number / TRILLION)) + " trillion";
    remainder = number % TRILLION;
  }
  words.push(word);
  return getWord(remainder, words);
}

function getPence(number) {
  return number ? `and ${getWord(number)} pence` : "";
}

function sharingIsCaring(chequeList) {
  let result = [];

  chequeList.forEach((element) => {
    let pounds = parseInt(element.split(".")[0], 10);
    let pence = parseInt(element.split(".")[1], 10);
    result.push(`${getWord(pounds)} pounds ${getPence(pence)}`);
  });

  console.log(result);
}

sharingIsCaring(chequeList);
