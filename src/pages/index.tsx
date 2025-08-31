import { PokemonListServer } from '../components/pokemon-list-server';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <PokemonListServer />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Pokemon Pokedex - Waku App',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
