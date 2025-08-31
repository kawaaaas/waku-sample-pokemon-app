import { use } from 'react';
import type { Pokemon } from '../types/pokemon';
import { getPokemonWithJapaneseName } from '../services/pokemon';
import { PokemonCardView } from './pokemon-card-view';

interface PokemonCardServerProps {
  pokemon: Pokemon;
}

export function PokemonCardServer({ pokemon }: PokemonCardServerProps) {
  const pokemonDetailPromise = getPokemonWithJapaneseName(pokemon.name);
  const pokemonDetail = use(pokemonDetailPromise);

  return <PokemonCardView pokemon={pokemonDetail} />;
}