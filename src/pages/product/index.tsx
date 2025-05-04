/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import { SortSelect } from "@src/components/SortSelect";
import { ProductCard } from "@src/components/ProductCard";
import { SkeletonCard } from "./loading";
import { CatogorySelect } from "@src/components/CatogorySelect";
import { useProductsData } from "./useProductsData";

/**
 * The `ProductPage` component in TypeScript React renders a list of products with filtering, sorting,
 * and skeleton loading functionality.
 * @returns The `ProductPage` component is being returned. It is a functional component that utilizes
 * React hooks such as `useInView` and a custom hook `useProductsData` to fetch and display product
 * data. The component renders a filter section, a sort select component, and a grid of product cards.
 * It also includes logic to fetch more data when the user scrolls to the bottom of the page.
 */
export const ProductPage: React.FC = () => {
  const { ref, inView } = useInView({ rootMargin: "100px" });
  const { hasNextPage, data, fetchNextPage, isSuccess, isLoading, isFetching } =
    useProductsData();

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage, inView]);

  return (
    <div className=" flex flex-col gap-4">
      <div className="flex justify-between items-center gap-4">
        <CatogorySelect />
        <SortSelect />
      </div>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
        {isSuccess &&
          data.pages.flatMap((item) =>
            item.data.map((val, index) => (
              <ProductCard
                lastElement={index === item.data.length - 1}
                innerRef={ref}
                key={val.id}
                {...val}
              />
            ))
          )}
        {(isFetching || isLoading) &&
          [1, 2, 3, 4].flatMap((item) => (
            <SkeletonCard isLoading={isLoading || isFetching} key={item} />
          ))}
      </div>
    </div>
  );
};
