import { getPokemonList } from "../services/pokemon";
import { PokemonSearchWrapperClient } from "./pokemon-search-wrapper-client";

interface PokemonSearchWrapperProps {
  hideInitialResults?: boolean;
}

// RSC enables async component implementation
export async function PokemonSearchWrapper({}: PokemonSearchWrapperProps) {
  const pokemonListPromise = getPokemonList(151);
  // Use async/await instead of use() in RSC
  const pokemonData = await pokemonListPromise;
  const pokemon = pokemonData.results;

  return <PokemonSearchWrapperClient pokemon={pokemon} />;
}
