// import React from 'react'
import { useEffect, useState } from "react";
import words from "./words.json";
import Hangman from "./Hangman";
import GuessWord from "./GuessWord";
import Keyboard from "./Keyboard";

const Game = () => {
  const [newWord, setNewWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !newWord.includes(letter)
  );

  return (
    <div className="w-full max-w-[800px] h-full m-8 flex flex-col justify-center items-center">
      <Hangman incorrectGuesses={incorrectLetters.length} />
      <GuessWord />
      <Keyboard />
    </div>
  );
};

export default Game;
