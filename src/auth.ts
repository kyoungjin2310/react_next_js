import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import cookie from "cookie";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    //로그인창, 회원가입창 next auth에 등록

    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          //credentials.username, credentials.password 고정
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });

        let setCookie = authResponse.headers.get("Set-Cookie");
        console.log("set-cookie", setCookie);
        if (setCookie) {
          const parsed = cookie.parse(setCookie);
          // 브라우저에 쿠키를 심어주는 것(프론트에 쿠키를 심으면 개인정보 유출문제)
          cookies().set("connect.sid", parsed["connect.sid"], parsed);
        }
        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
