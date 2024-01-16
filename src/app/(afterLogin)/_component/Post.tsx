import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
//fromNow 사용하려면 불러와야함
import relativeTime from "dayjs/plugin/relativeTime";
//한글
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "@/app/(afterLogin)/_component/PostImages";

//한글
dayjs.locale("ko");

//fromNow 사용
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
};
export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: "test",
      image:
        "https://images.unsplash.com/photo-1704996440137-44a1eb3c71ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      nickname: "test name",
    },
    content: "test diary",
    createdAt: new Date(),
    Images: [] as any[],
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() },
    );
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createdAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          <div>
            <PostImages post={target} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
