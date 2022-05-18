import { useState } from "react";

// Help handle focus state
const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);

  const focus = () => setIsFocused(true);
  const blur = () => setIsFocused(false);

  return {
    isFocused,
    blur,
    focus,
  };
};

export default useFocus;
