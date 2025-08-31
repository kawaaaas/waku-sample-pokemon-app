"use client";

import { useState, Suspense } from "react";
import { PokemonSearch } from "./pokemon-search";
import { LoadingSkeleton } from "./loading-skeleton";
import { Pokemon } from "../types/pokemon";
import { PokemonCardServer } from "./pokemon-card-server";
import { getPokemonWithJapaneseName } from "../services/pokemon";
import { PokemonCardClient } from "./pokemon-card-client";

interface PokemonSearchWrapperProps {
  pokemon: Pokemon[];
}

export function PokemonSearchWrapperClient({
  pokemon,
}: PokemonSearchWrapperProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <PokemonSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {!searchQuery.trim() ? (
        <div className="text-center text-gray-500 py-8">
          Enter a Pokemon name to search
        </div>
      ) : filteredPokemon.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          {searchQuery
            ? `No Pokemon found matching "${searchQuery}"`
            : "No Pokemon available"}
        </div>
      ) : (
        <>
          <div className="text-center mb-4 text-gray-600">
            Showing {filteredPokemon.length} Pokemon
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPokemon.map((p) => {
              const pokemonDetailPromise = getPokemonWithJapaneseName(p.name);
              return (
                <Suspense key={p.id} fallback={<LoadingSkeleton />}>
                  <PokemonCardClient
                    pokemonDetailPromise={pokemonDetailPromise}
                  />
                </Suspense>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
