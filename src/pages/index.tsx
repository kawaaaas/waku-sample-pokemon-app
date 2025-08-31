import { PokemonListServer } from "../components/pokemon-list-server";
import { Suspense } from "react";
import { LoadingFallback } from "../components/loading-fallback";

// RSC enables async component implementation
export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Suspense fallback={<LoadingFallback />}>
        <PokemonListServer />
      </Suspense>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Pokemon Pokedex - Waku App",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
