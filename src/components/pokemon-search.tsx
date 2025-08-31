'use client';

interface PokemonSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function PokemonSearch({ searchQuery, onSearchChange }: PokemonSearchProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full max-w-md mx-auto block px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}