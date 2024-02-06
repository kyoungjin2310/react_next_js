"use client";

import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../home.module.css";

export default function PostRecommends() {
  //hasNextPage - 다음페이지가 있으면 true, 없으면 false
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading,
    isError,
  } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    //queryKey가 같아야함
    [_1: string, _2: string],
    number
  >({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    //staleTime : fresh -> stale 시간 조정 단위(ms, Infinity - 항상 fresh)
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage: IPost[]) => {
      return lastPage[lastPage.length - 1]?.postId;
    },
    //초기 데이터 - react query Action reset 사용시 initialData 있으면 initialData, 없으면 데이터를 새로 가져옴
    initialPageParam: 0,
  });

  //inView - 처음에는 false, 태그가 보이면 true로 변경
  const { ref, inView } = useInView({
    //threshold - 몇 픽셀부터 보일건지
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      //다음페이지가 있을때
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return "error";
  }

  if (isPending) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg
          className={styles.loader}
          height="100%"
          viewBox="0 0 32 32"
          width={40}
        >
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{ stroke: "rgb(29, 155, 240)", opacity: 0.2 }}
          ></circle>
          <circle
            cx="16"
            cy="16"
            fill="none"
            r="14"
            strokeWidth="4"
            style={{
              stroke: "rgb(29, 155, 240)",
              strokeDasharray: 80,
              strokeDashoffset: 60,
            }}
          ></circle>
        </svg>
      </div>
    );
  }
  return (
    <>
      {data?.pages.map((page, i) => (
        //prop이 있을 경우에는 Fragment 써야함
        <Fragment key={i}>
          {page?.map((post) => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}

      {/*태그가 보이는 순간 이벤트호출 - Intersection Observer*/}
      <div ref={ref} style={{ height: 50 }} />
    </>
  );
}
