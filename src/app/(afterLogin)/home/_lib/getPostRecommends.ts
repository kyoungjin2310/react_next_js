import { revalidatePath } from "next/cache";

//데이터 불러오기

export async function getPostRecommends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/recommends`,
    {
      next: {
        tags: ["posts", "recommends"],
      },
    },
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  revalidatePath("/home");
  return res.json();
}
