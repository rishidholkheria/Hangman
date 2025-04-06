import React from 'react'

type HangmanWordProps = {
  guessedLetters: string[],
  newWord: string,
  hintLetters?: string[] // New prop for hint letters
}

const GuessWord = ({guessedLetters, newWord, hintLetters = []}: HangmanWordProps) => {
  return (
    <div className='min-w-[450px] bg-gray-800 p-5 mt-12 rounded-lg flex justify-evenly'>
        {newWord.split("").map((letter, key) => {
          const lowercaseLetter = letter.toLowerCase();
          const isGuessed = guessedLetters.includes(lowercaseLetter);
          const isHint = hintLetters.includes(lowercaseLetter);
          
          return (
            <span 
              key={key} 
              className={`
                ${isGuessed ? "text-white" : "text-transparent"} 
                ${isHint ? "text-yellow-300" : ""} 
                text-5xl font-mono font-extrabold border-b-4 border-white min-w-[32px] text-center
              `}
            >
              {letter}
            </span>
          );
        })}
    </div>
  )
}

export default GuessWord