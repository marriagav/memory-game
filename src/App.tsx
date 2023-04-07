import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import DisplayScore from "./components/DisplayScore";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [listOfVisited, setListOfVisited] = useState<string[]>([]);
  const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
  const [numberOfPokemon, setNumberOfPokemon] = useState(30);

  function changeNumberOfPokemon(test: any) {
    console.log(test.target.value);
    setNumberOfPokemon(test.target.value);
    setCurrentScore(0);
  }

  function addPokemonToList(pokemonId: string) {
    if (listOfVisited.includes(pokemonId)) {
      setCurrentScore(0);
      setListOfVisited([]);
    } else {
      setListOfVisited(listOfVisited.concat(pokemonId));
      setCurrentScore(currentScore + 1);
      setHighScore(Math.max(highScore, currentScore + 1));
    }
  }

  useEffect(() => {
    const pokemonCardsTemp: JSX.Element[] = [];
    for (let i = 1; i <= numberOfPokemon; i++) {
      pokemonCardsTemp.push(
        <PokemonCard
          pokemonNumber={i}
          className={"pokemonCard"}
          pokemonId={i.toString()}
          onClick={addPokemonToList}
          key={i.toString()}
        ></PokemonCard>
      );
    }
    setPokemonCards(pokemonCardsTemp.sort((a, b) => 0.5 - Math.random()));
  }, [currentScore, numberOfPokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
      </header>
      <main>
        <h3 className="instructions">
          Click the maximum number of pokemon that you can, without repeating
          any!
        </h3>
        <div className="infoContainer">
          <div className="slidecontainer">
            <p id="sliderText">Number of Pokemon: {numberOfPokemon}</p>
            <input
              type="range"
              className="slider"
              min="1"
              max="150"
              value={numberOfPokemon}
              onChange={changeNumberOfPokemon}
            ></input>
          </div>
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
        </div>
        <div className="cardsContainer">{pokemonCards}</div>
      </main>
    </div>
  );
}

export default App;
