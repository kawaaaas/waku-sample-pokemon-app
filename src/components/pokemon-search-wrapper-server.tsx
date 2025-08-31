import { use } from "react";
import { getPokemonList } from "../services/pokemon";
import { PokemonSearchWrapperClient } from "./pokemon-search-wrapper-client";

interface PokemonSearchWrapperProps {
  hideInitialResults?: boolean;
}

export function PokemonSearchWrapperServer({}: PokemonSearchWrapperProps) {
  const pokemonListPromise = getPokemonList(151);
  const pokemonData = use(pokemonListPromise);
  const pokemon = pokemonData.results;

  return <PokemonSearchWrapperClient pokemon={pokemon} />;
}
