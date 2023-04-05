import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const numberOfPokemon = 10;
  const pokemonCards: JSX.Element[] = [];
  for (let i = 1; i <= numberOfPokemon; i++) {
    pokemonCards.push(
      <PokemonCard
        pokemonNumber={i}
        className={"pokemonCard"}
        cardId={uuidv4()}
      ></PokemonCard>
    );
  }
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
