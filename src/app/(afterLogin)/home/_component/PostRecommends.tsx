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

export default function PostRecommends() {
  //queryKey가 같아야함
  const { data } = useInfiniteQuery<
    IPost[],
    Object,
    InfiniteData<IPost[]>,
    [_1: string, _2: string],
    number
  >({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommends,
    //staleTime : fresh -> stale 시간 조정 단위(ms, Infinity - 항상 fresh)
    staleTime: 60 * 1000,
    getNextPageParam: (lastpage) => lastpage.at(-1)?.postId,
    //초기 데이터 - react query Action reset 사용시 initialData 있으면 initialData, 없으면 데이터를 새로 가져옴
    initialPageParam: 0,
  });

  useEffect(() => {
    console.log(data);
  });

  return data?.pages.map((page, i) => (
    //prop이 있을 경우에는 Fragment 써야함
    <Fragment key={i}>
      {page.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </Fragment>
  ));
}
