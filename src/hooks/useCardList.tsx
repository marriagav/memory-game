import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import { v4 as uuidv4 } from "uuid";

// interface useCardsList {
//   url: string;
//   dependencies: (string | number)[];
// }

export const useCardsList = () => {
  const numberOfPokemon = 12;
  const [highScore, setHighScore] = useState(0);
  //   const [pokemonCards, setPokemonCards] = useState<JSX.Element[]>([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [listOfVisited, setListOfVisited] = useState<string[]>([]);
  let pokemonCards: JSX.Element[] = [];

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

  //   useEffect(() => {
  //     const pokemonCardsTemp: JSX.Element[] = [];
  //     for (let i = 1; i <= numberOfPokemon; i++) {
  //       const pokemonId: string = uuidv4();
  //       pokemonCardsTemp.push(
  //         <PokemonCard
  //           pokemonNumber={i}
  //           className={"pokemonCard"}
  //           pokemonId={pokemonId}
  //           onClick={addPokemonToList}
  //           key={pokemonId}
  //         ></PokemonCard>
  //       );
  //     }
  //     // setPokemonCards(pokemonCardsTemp);
  //     pokemonCards = pokemonCardsTemp;
  //   }, []);

  return { addPokemonToList, currentScore, highScore };
};
