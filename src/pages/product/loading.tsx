type SkeletonCardProps = {
  isLoading: boolean;
};

/**
 * The SkeletonCard component displays a loading skeleton UI when isLoading is true.
 * @param  - The `SkeletonCard` component is a React functional component that displays a loading
 * skeleton for a card component. It takes a prop `isLoading` which determines whether the skeleton
 * should be displayed or not.
 * @returns A SkeletonCard component is being returned. This component is used to display a loading
 * skeleton UI when the isLoading prop is true. The skeleton UI includes placeholders for an image,
 * title, and description.
 */
export const SkeletonCard: React.FC<SkeletonCardProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className=" grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
      <div className="flex flex-col space-y-3">
        <div className="relative overflow-hidden h-[250px] w-full rounded-xl">
          <div className="animate-pulse bg-gray-200 absolute top-0 left-0 w-full h-full"></div>
        </div>
        <div className="space-y-2">
          <div className="animate-pulse  bg-gray-200 h-12 "></div>
          <div className="animate-pulse bg-gray-200 h-24 "></div>
        </div>
      </div>
    </div>
  );
};
