import { useState } from "react";

function TextEditor() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  const handleAppend = () => {
    setHistory([...history, text]);
    console.log(history);
    setText("");
  };

  const handleUndo = () => {
    if (history.length > 0) {
      // Saving last entered text
      const prevText = history[history.length - 1];

      // Setting current input as last text
      setText(prevText);

      // removing last element from an history array
      setHistory(history.slice(0, history.length - 1));
    }

    if (history.length === 0) {
      setText("");
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Enter text"
        />

        <button onClick={handleAppend} type="button">
          Append
        </button>

        <button onClick={handleUndo} type="button">
          Undo
        </button>
      </div>

      <div>
        {history.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
}
export default TextEditor;
