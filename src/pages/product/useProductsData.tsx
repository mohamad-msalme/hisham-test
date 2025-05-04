/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductsQuery } from "@src/api/services/product";
import { useSearchParams } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

/**
 * The `useProductsData` function in TypeScript React is a custom hook that fetches and manages product
 * data using infinite query pagination based on search parameters.
 * @returns The `useProductsData` function is returning the result of the `useInfiniteQuery` hook with
 * specific configurations for handling pagination. It is using the `ProductsQuery` function with the
 * sort parameter obtained from the searchParams. The initial page parameter is set to 1, and the
 * `getNextPageParam` and `getPreviousPageParam` functions are defined to extract the page number from
 * the
 */
export const useProductsData = () => {
  const [searchParams] = useSearchParams();

  const filter = React.useMemo(() => {
    return {
      sortBy: searchParams.get("sort-by"),
      cat: searchParams.get("cat"),
    };
  }, [searchParams]);

  const getPage = (url: string | null) => {
    if (!url) return undefined;
    const matchPageNumber = url.match(/page=(\d+)/)?.[1];

    if (!matchPageNumber) return undefined;

    return parseInt(matchPageNumber);
  };

  const result = useInfiniteQuery({
    ...ProductsQuery(filter),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _pages) => getPage(lastPage.next_page_url),
    getPreviousPageParam: (lastPage, _pages) => getPage(lastPage.prev_page_url),
  });

  return result;
};
