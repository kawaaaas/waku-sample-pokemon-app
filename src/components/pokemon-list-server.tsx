import type { Pokemon } from "../types/pokemon";
import { getPokemonList } from "../services/pokemon";
import { PokemonCardServer } from "./pokemon-card-server";
import { Link } from 'waku';

export async function PokemonListServer() {
  let pokemon: Pokemon[] = [];
  let error: string | null = null;

  try {
    const data = await getPokemonList(151);
    pokemon = data.results;
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch Pokemon list";
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Pokemon Pokedex</h1>
        <div className="text-center text-red-500 py-8">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokemon Pokedex</h1>
      
      <div className="mb-6 text-center">
        <Link to="/search" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block">
          Search Pokemon
        </Link>
      </div>

      <div className="text-center mb-4 text-gray-600">
        Showing {pokemon.length} Pokemon
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemon.map((p) => (
          <PokemonCardServer key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
