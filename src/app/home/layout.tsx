import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  return <div>{children}</div>;
}
