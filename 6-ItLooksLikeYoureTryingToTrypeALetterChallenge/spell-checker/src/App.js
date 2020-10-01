import React, { useState } from "react";
import "./App.css";
import dictionary from "./resources/dictionary";

export default function App() {
  const [text, setText] = useState("");
  const [spellCheckResult, setSpellCheckResult] = useState("Start typing");

  let dictionaryArray = dictionary.split(/[\n\r]+/);
  let dictionaryCollection = {};

  dictionaryArray.forEach((word) => {
    let identifier = `${word.length}LetterWordsBeginningWith${word
      .charAt(0)
      .toUpperCase()}`;
    if (identifier in dictionaryCollection === false) {
      dictionaryCollection[identifier] = [];
    }
    dictionaryCollection[identifier].push(word);
  });

  function spellCheck(word) {
    if (word.length < 1) {
      return <div>Start typing</div>;
    }
    let identifier = `${
      word.length
    }LetterWordsBeginningWith${word[0].toUpperCase()}`;
    if (
      dictionaryCollection[identifier] &&
      dictionaryCollection[identifier].includes(word.toLowerCase())
    ) {
      return <div style={{ color: "green" }}>{`${word} is a real word!`}</div>;
    } else {
      return (
        <div style={{ color: "red" }}>{`${word} is not a real word!`}</div>
      );
    }
  }

  function handleChange(event) {
    setText(event.target.value);
    setSpellCheckResult(spellCheck(event.target.value));
  }

  return (
    <div className='App'>
      <h1>Spell Checker</h1>
      <span>Input a word: </span>
      <input type='text' value={text} onChange={handleChange} />
      <br />
      {spellCheckResult}
    </div>
  );
}
