export interface Pokemon {
  id: number;
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonSpecies {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }[];
}

export interface PokemonWithJapaneseName extends PokemonDetail {
  japaneseName: string;
}