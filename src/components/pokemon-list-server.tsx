import { Suspense } from "react";
import { getPokemonList } from "../services/pokemon";
import { PokemonCardServer } from "./pokemon-card-server";
import { Link } from "waku";
import { LoadingSkeleton } from "./loading-skeleton";

// RSC enables async component implementation
export async function PokemonListServer() {
  const pokemonListPromise = getPokemonList(151);

  // Use async/await instead of use() in RSC
  const data = await pokemonListPromise;
  const pokemon = data.results;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pokemon Pokedex</h1>

      <div className="mb-6 text-center">
        <Link
          to="/search"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-block"
        >
          Search Pokemon
        </Link>
      </div>

      <div className="text-center mb-4 text-gray-600">
        Showing {pokemon.length} Pokemon
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemon.map((p) => (
          // Using Suspense allows for streaming
          <Suspense key={p.name} fallback={<LoadingSkeleton />}>
            <PokemonCardServer pokemon={p} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
