import type { PokemonListResponse, PokemonDetail, PokemonSpecies, PokemonWithJapaneseName } from '../types/pokemon';

const POKEMON_API_BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit: number = 151, offset: number = 0): Promise<PokemonListResponse> {
  const response = await fetch(`${POKEMON_API_BASE}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon list: ${response.statusText}`);
  }
  return response.json();
}

export async function getPokemonDetail(nameOrId: string | number): Promise<PokemonDetail> {
  const response = await fetch(`${POKEMON_API_BASE}/pokemon/${nameOrId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon detail: ${response.statusText}`);
  }
  return response.json();
}

export async function getPokemonSpecies(nameOrId: string | number): Promise<PokemonSpecies> {
  const response = await fetch(`${POKEMON_API_BASE}/pokemon-species/${nameOrId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon species: ${response.statusText}`);
  }
  return response.json();
}

export async function getPokemonWithJapaneseName(nameOrId: string | number): Promise<PokemonWithJapaneseName> {
  const [pokemonDetail, pokemonSpecies] = await Promise.all([
    getPokemonDetail(nameOrId),
    getPokemonSpecies(nameOrId)
  ]);

  const japaneseName = pokemonSpecies.names.find(name => 
    name.language.name === 'ja-Hrkt' || name.language.name === 'ja'
  )?.name || pokemonDetail.name;

  return {
    ...pokemonDetail,
    japaneseName
  };
}

export async function searchPokemon(query: string, limit: number = 151): Promise<PokemonListResponse> {
  const allPokemon = await getPokemonList(limit);
  
  const filteredResults = allPokemon.results.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );
  
  return {
    ...allPokemon,
    count: filteredResults.length,
    results: filteredResults
  };
}