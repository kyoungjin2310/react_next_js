"use client";

import React, { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: React.ReactNode;
};

function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          //탭 전환해서 돌아올 경우 데이터를 새로 가져오는 설정
          refetchOnWindowFocus: false,
          //컴포넌트가 mount 되었다가 다시 unmount 되었을때 데이터를 새로 가져오는 설정
          retryOnMount: true,
          //인터넷 연결이 끊겼다가 다시 접속이 될 경우 데이터를 가져오는 설정
          refetchOnReconnect: false,
          //데이터 가져오기 실패시 retry하는 설정(횟수 지정가능)
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === "local"}
      />
    </QueryClientProvider>
  );
}

export default RQProvider;
