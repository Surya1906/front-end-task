/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSearchParams } from "react-router";
import { cleanEmptyParams } from "@/lib/cleanEmptyParams";

export function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = Object.fromEntries(searchParams.entries());

  const setFilters = (partialFilters: any) => {
    const updatedFilters = { ...filters, ...partialFilters };
    const cleanedFilters = cleanEmptyParams(updatedFilters);
    setSearchParams(cleanedFilters);
  };

  const resetFilters = () => {
    setSearchParams({});
  };

  return { filters, setFilters, resetFilters };
}
