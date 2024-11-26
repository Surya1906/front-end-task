import { QueryKeys } from "@/lib/QueryKeys";
import { User, UserQuery } from "@/services/users.service";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useListUsers = ({
  QueryParams,
}: {
  QueryParams: UserQuery | null;
}) => {
  const {
    data,
    isLoading: isFetching,
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: [QueryKeys.LIST_USERS],
    queryFn: () => User.getAll(QueryParams),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (QueryParams) {
      refetch();
    }
  }, [QueryParams]);

  const isLoading = isRefetching || isFetching;

  return {
    data,
    isLoading,
    refetch,
  };
};
