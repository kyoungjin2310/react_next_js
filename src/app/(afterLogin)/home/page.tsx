import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import TabProvider from "./_component/TabProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

//데이터 불러오기
export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
      //기본적으로 서버에서 받은 데이터를 저장안하려면
      cache: "no-store",
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  //key에 "post", "recommends"가 있을때는 getPostRecommend 을 실행
  await queryClient.prefetchQuery({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
      </TabProvider>
    </HydrationBoundary>
  );
}
