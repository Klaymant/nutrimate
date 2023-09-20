import { ReactNode } from "react";
import { Helmet } from "react-helmet";

export const PageTitle = ({ children }: Props) => (
  <Helmet>
    <title>Nutrimate - {children}</title>
  </Helmet>
);

type Props = {
  children: ReactNode;
};
