export const FriendsListSkeleton = () => {
  return (
    <div
      role="status"
      className="w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 dark:border-gray-700"
    >
      {Array.from({ length: 7 }).map((_val, index) => (
        <div
          key={index.toString()}
          className="flex items-center justify-between"
        >
          <div className="pt-4">
            <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
};
