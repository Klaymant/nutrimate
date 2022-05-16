import { useEffect, useState } from "react";
import { TimeUtil } from "../../services/TimeUtil";

export const useDelayedBmi = (bmi: number) => {
  const [delayedBmi, setDelayedBmi] = useState(bmi);

  useEffect(() => {
    (async () => {
      for (let i = 0; i < bmi; i++) {
        setDelayedBmi(i);
        await TimeUtil.sleep();
      }
    })()
  }, [bmi]);

  return delayedBmi;
}