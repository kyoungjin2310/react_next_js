import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return <div>홈 레이아웃 {children}</div>;
}
