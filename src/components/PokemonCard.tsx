import React from "react";
import { useHttp } from "../hooks/useHttp";

interface PokemonCardProps {
  pokemonNumber: number;
  className: string;
  cardId: string;
}

function PokemonCard(props: PokemonCardProps) {
  const { isLoading, fetchedData } = useHttp({
    url: `https://pokeapi.co/api/v2/pokemon/${props.pokemonNumber}`,
    dependencies: [props.pokemonNumber],
  });

  let loadedPokemon: null | pokemon = null;

  if (fetchedData) {
    const fetchedPokemon = fetchedData as any;
    loadedPokemon = {
      name: fetchedPokemon.name,
      sprite: fetchedPokemon.sprites.front_default,
    };
  }

  let content = <p>Loading Pokemon...</p>;
  if (!isLoading && loadedPokemon) {
    content = (
      <div className={props.className} key={props.cardId}>
        <p>{loadedPokemon?.name}</p>
      </div>
    );
  } else if (!isLoading && !loadedPokemon) {
    content = <p>Failed to fetch pokemon.</p>;
  }

  return content;
}

export default PokemonCard;
