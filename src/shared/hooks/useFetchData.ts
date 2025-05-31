import { useEffect, useState } from "react";
import { request } from "../../helpers/request";

export const useFetchData = <T>(
  url: string,
  query: string = ""
): [T | [], string | null, boolean, boolean] => {
  const [data, setData] = useState<T | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const serverData = await request<T>(url + query);
        console.log("serverData", serverData);
        const queryLength = query.length;
        console.log("###query", query[queryLength - 1]);

        setIsLoading(false);
        setData((prev) => {
          return [...prev, ...serverData.results];
        });
        setHasMore(serverData.info.pages > query[queryLength - 1]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ошибка при получении данных");
        }
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [url, query]);

  return [data, error, isLoading, hasMore];
};
