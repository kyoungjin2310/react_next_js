"use client";
//useSession 사용하려면 SessionProvider가 필요함
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function AuthSession({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
