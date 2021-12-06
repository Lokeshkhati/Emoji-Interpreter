import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍋": "Lemon",
  "🍎": "Red Apple",
  "🍑": "Peach",
  "🍓": "Strawberry",
  "🫐": "Blueberries",
  "🍈": "Melon",
  "🍊": "Tangerine",
  "🍍": " Pineapple",
  "🥭": "Mango",
  "🍌": "Banana"
};

const emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "We don't have this in our database. we will update this soon :)";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Fruit Emoji</h1>
      <p>Interpreter</p>
      <input
        placeholder="Enter emoji here"
        onChange={emojiInputHandler}
      ></input>

      <h2>{meaning} </h2>

      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
