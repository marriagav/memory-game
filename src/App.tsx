import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import DisplayScore from "./components/DisplayScore";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const numberOfPokemon = 12;
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
      </header>
      <main>
        <div className="scoresContainer">
          <DisplayScore
            className="scoreDisplay"
            scoreName="Current Score"
            scoreNumber={currentScore}
            id="currentScore"
          ></DisplayScore>
          <DisplayScore
            className="scoreDisplay"
            scoreName="Best Score"
            scoreNumber={highScore}
            id="bestScore"
          ></DisplayScore>
        </div>
        <div className="cardsContainer">{pokemonCards}</div>
      </main>
    </div>
  );
}

export default App;
