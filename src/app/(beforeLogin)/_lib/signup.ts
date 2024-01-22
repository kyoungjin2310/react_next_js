"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

type Props =
  | {
      message: string | null;
    }
  | undefined;

export default async (prevState: Props, formData: FormData) => {
  //vaild
  if (!formData.get("id") || !(formData.get("id") as string)?.trim()) {
    return { message: "no_id" };
  }
  if (!formData.get("name") || !(formData.get("name") as string)?.trim()) {
    return { message: "no_name" };
  }
  if (
    !formData.get("password") ||
    !(formData.get("password") as string)?.trim()
  ) {
    return { message: "no_password" };
  }
  if (!formData.get("image")) {
    return { message: "no_image" };
  }

  //server
  let shouldRedirect = false;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
      {
        method: "post",
        body: formData,
        credentials: "include",
      },
    );
    console.log(response.status);
    if (response.status === 403) {
      return { message: "user_exists" };
    }
    console.log(await response.json());
    shouldRedirect = true;
    //회원가입에 로그인까지 같이 하기
    await signIn("credentials", {
      username: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
  } catch (error) {
    console.log(error);
    return;
  }
  if (shouldRedirect) {
    //redirect -> try/catch문에서 사용금지
    redirect("/home");
  }
};
