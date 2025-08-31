import { PokemonSearchWrapper } from '../components/pokemon-search-wrapper';
import { getPokemonList } from '../services/pokemon';
import { Link } from 'waku';
import type { Pokemon } from '../types/pokemon';

export default async function SearchPage() {
  const data = await getData();
  let pokemon: Pokemon[] = [];
  let error: string | null = null;

  try {
    const pokemonData = await getPokemonList(151);
    pokemon = pokemonData.results;
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to fetch Pokemon list';
  }

  if (error) {
    return (
      <div>
        <title>{data.title}</title>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 text-center">
            <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
              ← Back to Pokemon List
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">Search Pokemon</h1>
          <div className="text-center text-red-500 py-8">
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <title>{data.title}</title>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Pokemon List
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">Search Pokemon</h1>
        <PokemonSearchWrapper initialPokemon={pokemon} hideInitialResults />
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Search Pokemon - Waku App',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};