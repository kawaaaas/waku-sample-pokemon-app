'use client';

import { useState, useEffect } from 'react';

interface PokemonSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function PokemonSearch({ searchQuery, onSearchChange }: PokemonSearchProps) {
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  const handleBlur = () => {
    onSearchChange(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchChange(inputValue);
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}