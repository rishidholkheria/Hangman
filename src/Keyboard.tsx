import React from "react";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Keyboard = () => {
  return (
    <div className="mt-5 border-2 border-gray-600 p-1.5 rounded-md">
        {
            alphabet.map((char, index) => (
                <button className="p-6 bg-gray-800 text-2xl m-0.5 hover:bg-gray-700 hover:cursor-pointer active:bg-gray-500">{char.toLocaleUpperCase()}</button>
            ))
        }
    </div>
  );
};

export default Keyboard;
