"use client";

import { PokemonCardView } from "./pokemon-card-view";
import { PokemonWithJapaneseName } from "../types/pokemon";
import { use } from "react";

interface PokemonCardClientProps {
  pokemonDetailPromise: Promise<PokemonWithJapaneseName>;
}

// CC is used because CC -> SC Promise passing violates RSC philosophy
export function PokemonCardClient({
  pokemonDetailPromise,
}: PokemonCardClientProps) {
  // In CC, use the use() hook
  const pokemonDetail = use(pokemonDetailPromise);

  return <PokemonCardView pokemon={pokemonDetail} />;
}
