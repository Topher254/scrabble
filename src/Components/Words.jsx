import React, { useState } from "react";

const Words = ({ inputLetters, setInputLetters }) => {
  const [words, setWords] = useState([]);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      const word = inputLetters.join("");
      setWords((prevWords) => [...prevWords, word]);
      setInputLetters([]);
    }
  };

  return (
    <div className="mt-4">
      <div className="text-lg font-bold mb-2">Formed Words:</div>
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <div
            key={index}
            className="bg-gray-200 py-2 px-4 rounded-md text-lg font-bold"
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Words;
