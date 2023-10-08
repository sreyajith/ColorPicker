import React, { useState } from 'react';
import './style.css';

const colors = [
  "red",
  "LightSeaGreen",
  "blue",
  "yellow",
  "purple",
  "pink",
  "orange",
  "cyan",
  "HoneyDew",
  "magenta",
  "brown",
  "lime",
  "teal",
  "navy",
  "violet",
  "indigo",
  "maroon",
  "white"
];

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
    document.body.style.backgroundColor = color;
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  return (
    <div className="container">
      {showColorList && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleColorClick(color)}
              style={{
                backgroundColor: color,
                width: '30px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
              }}
            ></li>
          ))}
        </ul>
      )}
      <button
        onClick={toggleColorList}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '5px 10px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Pick a color
      </button>
      {selectedColor && (
        <p>Selected color: {selectedColor}</p>
      )}
    </div>
  );
}

export default ColorPicker;
