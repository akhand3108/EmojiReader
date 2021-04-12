import "./styles.css";
import { useState } from "react";

const emojiDB = {
  "😀": "Grinning Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰 ": "Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "": ""
};

const emojiDBArray = Object.keys(emojiDB);

export default function App() {
  let [emojiDescription, setEmojiDescription] = useState("");

  function inputChangeHandler(event) {
    if (event.target.value.length > 2) {
      setEmojiDescription("Please Enter a single Emoji");
    } else if (event.target.value.length <= 2) {
      let meaning =
        emojiDB[event.target.value] === undefined
          ? "This Emoji is not in our Database"
          : emojiDB[event.target.value];
      setEmojiDescription(meaning);
    }
  }

  function emojiClickHandler(emoji) {
    setEmojiDescription(emojiDB[emoji]);
  }

  return (
    <div className="App">
      <h1>Inside Outt!</h1>
      <input onChange={inputChangeHandler}></input>
      <h2 id="emojiDescription">{emojiDescription}</h2>

      <h3>Emojis we know </h3>
      {emojiDBArray.map((emoji) => {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
