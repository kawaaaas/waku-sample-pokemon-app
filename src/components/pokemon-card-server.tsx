import type { Pokemon, PokemonWithJapaneseName } from '../types/pokemon';
import { getPokemonWithJapaneseName } from '../services/pokemon';
import { PokemonCardView } from './pokemon-card-view';

interface PokemonCardServerProps {
  pokemon: Pokemon;
}

export async function PokemonCardServer({ pokemon }: PokemonCardServerProps) {
  let pokemonDetail: PokemonWithJapaneseName | null = null;
  let error = false;

  try {
    pokemonDetail = await getPokemonWithJapaneseName(pokemon.name);
  } catch (e) {
    error = true;
    console.error(`Failed to fetch Pokemon detail for ${pokemon.name}:`, e);
  }

  if (error || !pokemonDetail) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-center text-gray-500">Failed to load Pokemon data</div>
      </div>
    );
  }

  return <PokemonCardView pokemon={pokemonDetail} />;
}