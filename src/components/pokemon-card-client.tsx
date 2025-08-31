'use client';

import { useState, useEffect } from 'react';
import type { Pokemon, PokemonWithJapaneseName } from '../types/pokemon';
import { getPokemonWithJapaneseName } from '../services/pokemon';
import { PokemonCardView } from './pokemon-card-view';

interface PokemonCardClientProps {
  pokemon: Pokemon;
}

export function PokemonCardClient({ pokemon }: PokemonCardClientProps) {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonWithJapaneseName | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detail = await getPokemonWithJapaneseName(pokemon.name);
        setPokemonDetail(detail);
      } catch (error) {
        console.error(`Failed to fetch Pokemon detail for ${pokemon.name}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [pokemon.name]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
        <div className="bg-gray-300 h-32 w-32 mx-auto mb-4 rounded"></div>
        <div className="bg-gray-300 h-4 w-3/4 mx-auto mb-2 rounded"></div>
        <div className="bg-gray-300 h-3 w-1/2 mx-auto rounded"></div>
      </div>
    );
  }

  if (!pokemonDetail) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-center text-gray-500">Failed to load Pokemon data</div>
      </div>
    );
  }

  return <PokemonCardView pokemon={pokemonDetail} />;
}