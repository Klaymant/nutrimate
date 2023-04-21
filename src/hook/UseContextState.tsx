import { useState } from "react";

export const useContextState = <T,>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
  };
}
