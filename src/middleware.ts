import { auth } from "./auth";
import { NextResponse } from "next/server";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
//로그인해야 볼 수 있는 페이지
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
