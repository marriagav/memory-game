import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <PokemonCard
          pokemonNumber={1}
          className={"pokemonCard"}
          cardId={"hola"}
        ></PokemonCard>
      </header>
    </div>
  );
}

export default App;
