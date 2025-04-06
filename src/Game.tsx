import React, { useEffect, useState } from "react";
import words from "./words.json";
import Hangman from "./Hangman";
import GuessWord from "./GuessWord";

const Game = () => {
  const [newWord, setNewWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [hintLetters, setHintLetters] = useState<string[]>([]);

  useEffect(() => {
    const uniqueLetters = Array.from(new Set(newWord.toLowerCase().split("")));
    
    const hintCount = Math.ceil(uniqueLetters.length * 0.3);
    
    const selectedHints: string[] = [];
    for (let i = 0; i < hintCount; i++) {
      if (uniqueLetters.length === 0) break;
      
      const randomIndex = Math.floor(Math.random() * uniqueLetters.length);
      selectedHints.push(uniqueLetters[randomIndex]);
      uniqueLetters.splice(randomIndex, 1);
    }
    
    setHintLetters(selectedHints);
    setGuessedLetters(selectedHints);
  }, [newWord]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !newWord.toLowerCase().includes(letter)
  );

  const addGuessedLetter = (letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((currentArray) => [...currentArray, letter]);
  }

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const keyPressed = event.key.toLowerCase();
      if (!keyPressed.match(/^[a-z]$/)) return;

      event.preventDefault();
      addGuessedLetter(keyPressed);
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const isWinner = newWord.toLowerCase().split("").every(letter => 
    guessedLetters.includes(letter)
  );
  
  const isLoser = incorrectLetters.length >= 6;

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setNewWord(randomWord);
    setGuessedLetters([]);
    setHintLetters([]);
  };

  return (
    <div className="w-full max-w-[800px] h-full m-8 flex flex-col justify-center items-center">
      <Hangman incorrectGuesses={incorrectLetters.length} />
      <GuessWord 
        guessedLetters={guessedLetters} 
        newWord={newWord} 
        hintLetters={hintLetters} 
      />
      
      {isWinner && (
        <div className="mt-4 text-center">
          <div className="text-2xl text-green-500 font-bold">You Win!</div>
          <button 
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800"
          >
            Play Again
          </button>
        </div>
      )}
      
      {isLoser && (
        <div className="mt-4 text-center">
          <div className="text-2xl text-red-500 font-bold">Game Over! The word was: {newWord}</div>
          <button 
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Play Again
          </button>
        </div>
      )}
      
      {!isWinner && !isLoser && (
        <div className="mt-4 text-gray-600">
          Type any letter on your keyboard to guess
        </div>
      )}
    </div>
  );
};

export default Game;