import "./App.css";
import Game from "./Game";

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold">Hangman</h1>
      <Game />
    </div>
  );
}

export default App;
