// import { http, HttpResponse, StrictResponse } from "msw";
// import { faker } from "@faker-js/faker";

// function generateDate() {
//   const lastWeek = new Date(Date.now());
//   lastWeek.setDate(lastWeek.getDate() - 7);
//   return faker.date.between({
//     from: lastWeek,
//     to: Date.now(),
//   });
// }
// const User = [
//   {
//     id: "elonmusk",
//     nickname: "Elon Musk",
//     image:
//       "https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_normal.jpg",
//   },
//   {
//     id: "test",
//     nickname: "test name",
//     image:
//       "https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   { id: "leoturtle", nickname: "Eric", image: faker.image.avatar() },
// ];
// const Posts = [];
// const delay = (ms: number) =>
//   new Promise((res) => {
//     setTimeout(res, ms);
//   });

// export const handlers = [
//   http.post("/api/login", () => {
//     console.log("로그인");
//     return HttpResponse.json(User[1], {
//       headers: {
//         "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
//       },
//     });
//   }),
//   http.post("/api/logout", () => {
//     console.log("로그아웃");
//     return new HttpResponse(null, {
//       headers: {
//         "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
//       },
//     });
//   }),
//   http.post("/api/users", async ({ request }) => {
//     console.log("회원가입");
//     // return HttpResponse.text(JSON.stringify('user_exists'), {
//     //   status: 403,
//     // })
//     return HttpResponse.text(JSON.stringify("ok"), {
//       headers: {
//         "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
//       },
//     });
//   }),
//   http.get("/api/postRecommends", async ({ request }) => {
//     await delay(3000);
//     const url = new URL(request.url);
//     const cursor = parseInt(url.searchParams.get("cursor") as string) || 0;
//     return HttpResponse.json([
//       {
//         postId: cursor + 1,
//         User: User[0],
//         content: `${cursor + 1} Z.com is so marvelous. I'm gonna buy that.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: cursor + 2,
//         User: User[0],
//         content: `${cursor + 2} Z.com is so marvelous. I'm gonna buy that.`,
//         Images: [
//           { imageId: 1, link: faker.image.urlLoremFlickr() },
//           { imageId: 2, link: faker.image.urlLoremFlickr() },
//         ],
//         createdAt: generateDate(),
//       },
//       {
//         postId: cursor + 3,
//         User: User[0],
//         content: `${cursor + 3} Z.com is so marvelous. I'm gonna buy that.`,
//         Images: [],
//         createdAt: generateDate(),
//       },
//       {
//         postId: cursor + 4,
//         User: User[0],
//         content: `${cursor + 4} Z.com is so marvelous. I'm gonna buy that.`,
//         Images: [
//           { imageId: 1, link: faker.image.urlLoremFlickr() },
//           { imageId: 2, link: faker.image.urlLoremFlickr() },
//           { imageId: 3, link: faker.image.urlLoremFlickr() },
//           { imageId: 4, link: faker.image.urlLoremFlickr() },
//         ],
//         createdAt: generateDate(),
//       },
//       {
//         postId: cursor + 5,
//         User: User[0],
//         content: `${cursor + 5} Z.com is so marvelous. I'm gonna buy that.`,
//         Images: [
//           { imageId: 1, link: faker.image.urlLoremFlickr() },
//           { imageId: 2, link: faker.image.urlLoremFlickr() },
//           { imageId: 3, link: faker.image.urlLoremFlickr() },
//         ],
//         createdAt: generateDate(),
//       },
//     ]);
//   }),
//   http.get("/api/followingPosts", async ({ request }) => {
//     await delay(3000);
//     return HttpResponse.json([
//       {
//         postId: 1,
//         User: User[0],
//         content: `${1} Stop following me. I'm too famous.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 2,
//         User: User[0],
//         content: `${2} Stop following me. I'm too famous.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 3,
//         User: User[0],
//         content: `${3} Stop following me. I'm too famous.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 4,
//         User: User[0],
//         content: `${4} Stop following me. I'm too famous.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 5,
//         User: User[0],
//         content: `${5} Stop following me. I'm too famous.`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//     ]);
//   }),
//   http.get("/api/search/:tag", ({ request, params }) => {
//     const { tag } = params;
//     return HttpResponse.json([
//       {
//         postId: 1,
//         User: User[0],
//         content: `${1} 검색결과 ${tag}`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 2,
//         User: User[0],
//         content: `${2} 검색결과 ${tag}`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 3,
//         User: User[0],
//         content: `${3} 검색결과 ${tag}`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 4,
//         User: User[0],
//         content: `${4} 검색결과 ${tag}`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 5,
//         User: User[0],
//         content: `${5} 검색결과 ${tag}`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//     ]);
//   }),
//   http.get("/api/users/:userId/posts", ({ request, params }) => {
//     const { userId } = params;
//     return HttpResponse.json([
//       {
//         postId: 1,
//         User: User[0],
//         content: `${1} ${userId}의 게시글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 2,
//         User: User[0],
//         content: `${2} ${userId}의 게시글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 3,
//         User: User[0],
//         content: `${3} ${userId}의 게시글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 4,
//         User: User[0],
//         content: `${4} ${userId}의 게시글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 5,
//         User: User[0],
//         content: `${5} ${userId}의 게시글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//     ]);
//   }),
//   http.get("/api/users/:userId", ({ request, params }): StrictResponse<any> => {
//     const { userId } = params;
//     const found = User.find((v) => v.id === userId);
//     if (found) {
//       return HttpResponse.json(found);
//     }
//     return HttpResponse.json(
//       { message: "no_such_user" },
//       {
//         status: 404,
//       },
//     );
//   }),
//   http.get("/api/posts/:postId", ({ request, params }): StrictResponse<any> => {
//     const { postId } = params;
//     if (parseInt(postId as string) > 10) {
//       return HttpResponse.json(
//         { message: "no_such_post" },
//         {
//           status: 404,
//         },
//       );
//     }
//     return HttpResponse.json({
//       postId,
//       User: User[0],
//       content: `${1} 게시글 아이디 ${postId}의 내용`,
//       Images: [
//         { imageId: 1, link: faker.image.urlLoremFlickr() },
//         { imageId: 2, link: faker.image.urlLoremFlickr() },
//         { imageId: 3, link: faker.image.urlLoremFlickr() },
//       ],
//       createdAt: generateDate(),
//     });
//   }),
//   http.get("/api/posts/:postId/comments", ({ request, params }) => {
//     const { postId } = params;
//     return HttpResponse.json([
//       {
//         postId: 1,
//         User: User[0],
//         content: `${1} 게시글 ${postId}의 답글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 2,
//         User: User[0],
//         content: `${2} 게시글 ${postId}의 답글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 3,
//         User: User[0],
//         content: `${3} 게시글 ${postId}의 답글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 4,
//         User: User[0],
//         content: `${4} 게시글 ${postId}의 답글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//       {
//         postId: 5,
//         User: User[0],
//         content: `${5} 게시글 ${postId}의 답글`,
//         Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
//         createdAt: generateDate(),
//       },
//     ]);
//   }),
//   http.get("/api/followRecommends", ({ request }) => {
//     return HttpResponse.json(User);
//   }),
//   http.get("/api/trends", ({ request }) => {
//     return HttpResponse.json([
//       { tagId: 1, title: "test", count: 1264 },
//       { tagId: 2, title: "test01", count: 1264 },
//       { tagId: 3, title: "test02", count: 1264 },
//       { tagId: 4, title: "test03", count: 1264 },
//       { tagId: 5, title: "test04", count: 1264 },
//       { tagId: 6, title: "test05", count: 1264 },
//       { tagId: 7, title: "test06", count: 1264 },
//       { tagId: 8, title: "test07", count: 1264 },
//       { tagId: 9, title: "test08", count: 1264 },
//     ]);
//   }),
// ];
