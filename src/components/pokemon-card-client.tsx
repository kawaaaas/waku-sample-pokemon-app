import { use } from "react";
import type { PokemonWithJapaneseName } from "../types/pokemon";
import { PokemonCardView } from "./pokemon-card-view";

interface PokemonCardClientProps {
  pokemonDetailPromise: Promise<PokemonWithJapaneseName>;
}

export function PokemonCardClient({
  pokemonDetailPromise,
}: PokemonCardClientProps) {
  const pokemonDetail = use(pokemonDetailPromise);

  return <PokemonCardView pokemon={pokemonDetail} />;
}
