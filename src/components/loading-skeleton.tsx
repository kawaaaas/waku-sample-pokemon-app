export function LoadingSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
      <div className="bg-gray-300 h-32 w-32 mx-auto mb-4 rounded"></div>
      <div className="bg-gray-300 h-4 w-3/4 mx-auto mb-2 rounded"></div>
      <div className="bg-gray-300 h-3 w-1/2 mx-auto rounded"></div>
    </div>
  );
}