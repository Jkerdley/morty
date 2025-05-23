import { useEffect, useState } from "react";
import { request } from "../../helpers/request";

export const useFetchData = <T>(url: string): [T | [], string | null] => {
    const [data, setData] = useState<T | []>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const serverData = await request<T>(url);

                setData(serverData);
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
    }, [url]);

    return [data, error];
};
