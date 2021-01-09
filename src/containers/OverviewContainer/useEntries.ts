import { useEffect, useState } from "react";
import { listenToEntries } from "../../app/database";
import { Entry } from "../../app/types";

const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const unsubscribe = listenToEntries((fetchedEntries) => {
      setEntries(fetchedEntries);
    });

    return unsubscribe;
  }, []);

  return entries;
};

export default useEntries;
