import { useEffect, useState } from 'react';
import { Tab } from '../types/Tab';

export const useTabs = () => {
  const fileName = 'tabs.json';

  const [tabs, setTabs] = useState<Tab[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () =>
      await fetch(fileName)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch tabs data');
          }
          return response.json();
        })
        .then((data: Tab[]) => {
          const sortedTabsByOrder = data.sort((a, b) => a.order - b.order);

          setTabs(sortedTabsByOrder);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => setLoading(false)))();
  }, []);

  return { tabs, loading, error };
};
