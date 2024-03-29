"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      //개발을 할거면 .env.local에 NEXT_PUBLIC_API_MOCKING=enabled로 설정 아닐때는 다른 값
      //브라우저에서 접근이 가능하도록 NEXT_PUBLIC_을 꼭 붙여야함
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};
