import React from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import DisplayScore from "./components/DisplayScore";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useCardsList } from "./hooks/useCardList";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [listOfVisited, setListOfVisited] = useState<string[]>([]);
  const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
  const numberOfPokemon = 12;
  // const { addPokemonToList, currentScore, highScore } = useCardsList();
  // const [po]
  // const pokemonCards: JSX.Element[] = [];
  // console.log()

  function addPokemonToList(pokemonId: string) {
    if (listOfVisited.includes(pokemonId)) {
      setCurrentScore(0);
      setListOfVisited([]);
    } else {
      setListOfVisited(listOfVisited.concat(pokemonId));
      console.log(pokemonId);
      console.log(listOfVisited);
      console.log(currentScore);
      setCurrentScore(currentScore + 1);
      setHighScore(Math.max(highScore, currentScore));
    }
  }

  useEffect(() => {
    console.log("building");
    const pokemonCardsTemp: JSX.Element[] = [];
    for (let i = 1; i <= numberOfPokemon; i++) {
      const pokemonId: string = uuidv4();
      pokemonCardsTemp.push(
        <PokemonCard
          pokemonNumber={i}
          className={"pokemonCard"}
          pokemonId={pokemonId}
          onClick={addPokemonToList}
          key={pokemonId}
        ></PokemonCard>
      );
    }
    setPokemonCards(pokemonCardsTemp);
  }, []);

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
