"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommends } from "../_lib/getPostRecommends";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";
import { useEffect } from "react";

export default function PostRecommends() {
  //queryKey가 같아야함
  const { data } = useQuery<IPost>({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommends,
    //staleTime : fresh -> stale 시간 조정 단위(ms, Infinity - 항상 fresh)
    staleTime: 60 * 1000,
    //초기 데이터 - react query Action reset 사용시 initialData 있으면 initialData, 없으면 데이터를 새로 가져옴
    initialData: () => {
      return {
        postId: 0,
        User: {
          id: "",
          nickname: "",
          image: "",
        },
        content: "",
        createdAt: new Date(),
        Images: [],
      };
    },
  });

  useEffect(() => {
    console.log(data);
  });

  const arr: IPost[] = data ? [data] : [];
  return arr?.map((post) => <Post key={post.postId} post={post} />);
}
