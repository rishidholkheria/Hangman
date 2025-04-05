import React from "react";

const HEAD = (
  <div className="absolute top-[48px] right-[-21px] h-[45px] w-[45px] border-4 border-white rounded-full" />
);

const BODY = (
  <div className="absolute bg-white top-[93px] right-[0px] h-[100px] w-[4px] " />
);

const RIGHT_ARM = (
  <div className="absolute bg-white top-[85px] right-[-20px] h-[50px] w-[4px] rotate-[50deg]" />
);

const LEFT_ARM = (
  <div className="absolute bg-white top-[85px] right-[20px] h-[50px] w-[4px] rotate-[310deg]" />
);

const RIGHT_LEG = (
  <div className="absolute bg-white top-[183px] right-[-20px] h-[50px] w-[4px] rotate-[310deg]" />
);

const LEFT_LEG = (
  <div className="absolute bg-white top-[183px] right-[20px] h-[50px] w-[4px] rotate-[50deg]" />
);

const BODYPARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];


type HangmanProps = {
  incorrectGuesses: number;
};

const Hangman = ({ incorrectGuesses } : HangmanProps) => {
  console.log('incorrectGuesses', incorrectGuesses)
  return (
    <div className="relative">
      {
        BODYPARTS.slice(0,incorrectGuesses)
      }
      <div className="absolute h-[50px] w-[4px] top-0 right-0 bg-white"></div>
      <div className="h-[4px] w-[120px] ml-[40px] bg-white"></div>
      <div className="h-[400px] w-[4px] ml-[40px] bg-white"></div>
      <div className="h-[4px] w-[80px] bg-white"></div>
    </div>
  );
};

export default Hangman;
