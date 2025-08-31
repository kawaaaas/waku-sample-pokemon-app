import { LoadingSkeleton } from './loading-skeleton';

interface LoadingFallbackProps {
  count?: number;
}

export function LoadingFallback({ count = 20 }: LoadingFallbackProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {Array.from({ length: count }, (_, i) => (
          <LoadingSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}