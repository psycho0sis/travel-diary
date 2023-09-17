import { useEffect, useState } from 'react';

export function userUniversalLoader<T>(callback: () => Promise<T>): {
  data: T;
  error: boolean;
  loading: boolean;
};

export function userUniversalLoader<T>(callback: () => Promise<T[]>) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await callback();

        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { data, error, loading };
}
