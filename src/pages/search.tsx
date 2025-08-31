import { PokemonSearchWrapper } from "../components/pokemon-search-wrapper";
import { Link } from "waku";
import { Suspense } from "react";
import { LoadingFallback } from "../components/loading-fallback";

// RSC enables async component implementation
export default async function SearchPage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Pokemon List
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-center mb-8">Search Pokemon</h1>
        <Suspense fallback={<LoadingFallback count={0} />}>
          <PokemonSearchWrapper hideInitialResults />
        </Suspense>
      </div>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Search Pokemon - Waku App",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
