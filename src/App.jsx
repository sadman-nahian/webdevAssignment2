import React, { useState } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Text from "./Text";

function App() {
  const [color, setColor] = useState(["black", "red", "purple","orange"]);
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    const size = color.length;
    setIndex((prevIndex) => (prevIndex + 1) % size);
  };
  const handlePrev = () => {
    const size = color.length;
    setIndex((prevIndex) => (prevIndex - 1 + size) % size);
  };

  return (
    <div className="container" style={{backgroundColor:color[index]}}
    >
      <h1 className="assignment">ASSIGNMENT 2</h1>
      <Buttons next={handleNext} prev={handlePrev} />
      <Text text={color[index]} />
    </div>
  );
}

export default App;
