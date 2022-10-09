import "./App.css";
import { useState } from "react";

import Text from "./components/Text";
import Buttons from "./components/Buttons";

function App() {
  const [selectedText, setSelectedText] = useState();

  const handleMouseUp = () => {
    setSelectedText(window.getSelection().anchorNode.data);
    // console.log(`Selected text: ${window.getSelection().toString()}`);
  };

  const texts = [
    "Devs Just Want to Have Fun by Cyndi Lauper",
    "I come home in the morning light My mother says, “When you gonna live your life right?” O mother dear we’re not the fortunate ones And devs, they wanna have fun Oh devs just want to have fun",
    'The phone rings in the middle of the night My father yells, "What you gonna do with your life?" Oh daddy dear, you know you’re still number one But girlsdevs, they wanna have fun Oh devs just want to have',
    "That’s all they really want Some fun When the working day is done Oh devs, they wanna have fun Oh devs just wanna have fun (devs, they wanna, wanna have fun, devs wanna have)",
  ];

  const [currentElement, setCurrentElement] = useState("p");

  texts.forEach((currText) => {});

  return (
    <div onMouseUp={handleMouseUp} className="App">
      <h1 className="main-title">Hi I'am Tiptap</h1>
      <Buttons setCurrentElement={setCurrentElement} />
      <div className="editor-container">
        {texts.map((text) => (
          <Text currentElement={currentElement} text={text} />
        ))}
      </div>
    </div>
  );
}

export default App;
