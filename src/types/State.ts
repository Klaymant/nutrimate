import { Dispatch } from "react";

export type State<T> = {
  value: T;
  setValue: Dispatch<React.SetStateAction<T>>;
};
