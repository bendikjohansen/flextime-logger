import { useEffect, useState } from "react";
import { fetchWorkdayLength } from "../../app/database";

const useWorkdayLength = () => {
  const [workdayLength, setWorkdayLength] = useState(0);

  useEffect(() => {
    (async () => {
      setWorkdayLength(await fetchWorkdayLength());
    })();
  }, []);

  return workdayLength;
};

export default useWorkdayLength;
