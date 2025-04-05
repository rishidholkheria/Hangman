import React, { useState } from 'react'

const GuessWord = () => {
  const [guessedLetters, setGuessedLetters] = useState(["t"]);

  const word = "TEST";
  return (
    <div className='min-w-[450px] bg-gray-800 p-5 mt-12 rounded-lg flex justify-evenly'>
        {word.split("").map((letter, key) => (
            <span key={key} className= {`${guessedLetters.includes(letter.toLowerCase()) ? "text-white" : "text-transparent"} text-5xl font-mono font-extrabold border-b-4 border-white min-w-[32px] text-center`}>{letter}</span>
        ))}
    </div>
  )
}

export default GuessWord