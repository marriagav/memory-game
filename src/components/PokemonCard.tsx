import React from "react";

interface PokemonCardProps {
  pokemonNumber: number;
  className: string;
  cardId: string;
}

function PokemonCard(props: PokemonCardProps) {
  return <div className={props.className} key={props.cardId}></div>;
}
