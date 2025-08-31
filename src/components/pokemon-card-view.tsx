import type { PokemonWithJapaneseName } from '../types/pokemon';

interface PokemonCardViewProps {
  pokemon: PokemonWithJapaneseName;
}

export function PokemonCardView({ pokemon }: PokemonCardViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="text-center">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-32 h-32 mx-auto mb-4 object-contain"
        />
        <h3 className="text-lg font-semibold mb-2">{pokemon.japaneseName}</h3>
        <p className="text-sm text-gray-600 mb-2">#{pokemon.id.toString().padStart(3, '0')}</p>
        <div className="flex justify-center gap-2 mb-2">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800"
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-500">
          <div>Height: {pokemon.height / 10}m</div>
          <div>Weight: {pokemon.weight / 10}kg</div>
        </div>
      </div>
    </div>
  );
}