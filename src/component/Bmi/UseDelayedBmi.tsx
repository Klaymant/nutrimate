import { useEffect, useState } from "react";
import { TimeUtil } from "../../services/TimeUtil";

export const useDelayedBmi = (bmi: number) => {
  const [result, setResult] = useState(bmi);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    (async () => {
      setIsRunning(true);

      for (let i = 0; i < bmi; i++) {
        setResult(i);
        await TimeUtil.sleep();
      }
      setResult(bmi);
      setIsRunning(false);
    })()
  }, [bmi]);

  return {
    result,
    isRunning,
  };
}