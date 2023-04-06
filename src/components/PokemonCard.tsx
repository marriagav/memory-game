import React from "react";
import { useHttp } from "../hooks/useHttp";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemonNumber: number;
  className: string;
  pokemonId: string;
  onClick: Function;
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
      name:
        fetchedPokemon.name.charAt(0).toUpperCase() +
        fetchedPokemon.name.slice(1),
      sprite: fetchedPokemon.sprites.front_default,
    };
  }

  function clickCard(event: React.MouseEvent) {
    props.onClick(props.pokemonId);
  }

  let content = <p>Loading Pokemon...</p>;
  if (!isLoading && loadedPokemon) {
    content = (
      <div
        className={props.className}
        key={props.pokemonId}
        onClick={clickCard}
      >
        <img src={loadedPokemon.sprite} alt={`${loadedPokemon?.name} image`} />
        <div className="bottom">
          <p>{loadedPokemon?.name}</p>
        </div>
      </div>
    );
  } else if (!isLoading && !loadedPokemon) {
    content = <p>Failed to fetch pokemon.</p>;
  }

  return content;
}

export default PokemonCard;
