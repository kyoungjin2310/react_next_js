import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import TabProvider from "./_component/TabProvider";

export default function Home() {
  return (
    <TabProvider>
      <Tab />
      <PostForm />
      <Post />
    </TabProvider>
  );
}
