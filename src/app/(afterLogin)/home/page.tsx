import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "../_component/Post";

export default function Home() {
  return (
    <main>
      <Tab />
      <Post />
      <PostForm />
    </main>
  );
}
