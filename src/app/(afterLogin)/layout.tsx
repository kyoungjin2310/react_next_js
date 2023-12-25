import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default async function AfterLayout({ children }: Props) {
  return (
    <div>
      Enter
      {children}
    </div>
  );
}
