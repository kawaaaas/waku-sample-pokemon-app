import type { Pokemon } from "../types/pokemon";
import { getPokemonWithJapaneseName } from "../services/pokemon";
import { PokemonCardView } from "./pokemon-card-view";

interface PokemonCardServerProps {
  pokemon: Pokemon;
}

// RSC enables async component implementation
export async function PokemonCardServer({ pokemon }: PokemonCardServerProps) {
  const pokemonDetailPromise = getPokemonWithJapaneseName(pokemon.name);
  // Use async/await instead of use() in RSC
  const pokemonDetail = await pokemonDetailPromise;

  return <PokemonCardView pokemon={pokemonDetail} />;
}
