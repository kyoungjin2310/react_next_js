import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "./_component/PostForm";
import TabProvider from "./_component/TabProvider";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostRecommends from "./_component/PostRecommends";
import { getPostRecommends } from "./_lib/getPostRecommends";

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
        <PostRecommends />
      </TabProvider>
    </HydrationBoundary>
  );
}
