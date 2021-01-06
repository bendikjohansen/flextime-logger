import { useEffect, useState } from "react";
import { listenToEntries } from "../../app/database";
import { Entry } from "../../app/types";

const useEntries = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    listenToEntries((fetchedEntries) => {
      setEntries(fetchedEntries);
    });
  }, []);

  return entries;
};

export default useEntries;
