"use client";

import { useState, useMemo } from "react";
import type { Pokemon } from "../types/pokemon";
import { PokemonCardClient } from "./pokemon-card-client";
import { PokemonSearch } from "./pokemon-search";

interface PokemonSearchWrapperProps {
  initialPokemon: Pokemon[];
  hideInitialResults?: boolean;
}

export function PokemonSearchWrapper({
  initialPokemon,
  hideInitialResults = false,
}: PokemonSearchWrapperProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPokemon = useMemo(() => {
    if (!searchQuery.trim()) return hideInitialResults ? [] : initialPokemon;

    return initialPokemon.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [initialPokemon, searchQuery, hideInitialResults]);

  const showResults = !hideInitialResults || searchQuery.trim();

  return (
    <>
      <PokemonSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {!showResults ? (
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
            {filteredPokemon.map((p) => (
              <PokemonCardClient key={p.name} pokemon={p} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
