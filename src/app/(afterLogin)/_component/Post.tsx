import style from "./post.module.css";
import Link from "next/link";
import dayjs from "dayjs";
//fromNow 사용하려면 불러와야함
import relativeTime from "dayjs/plugin/relativeTime";
//한글
import "dayjs/locale/ko";
import ActionButtons from "@/app/(afterLogin)/_component/ActionButtons";
import PostArticle from "@/app/(afterLogin)/_component/PostArticle";
import PostImages from "@/app/(afterLogin)/_component/PostImages";
import { Post as IPost } from "@/model/Post";
import { MouseEventHandler } from "react";

//한글
dayjs.locale("ko");

//fromNow 사용
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: IPost;
};

const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
  e.stopPropagation();
};

export default function Post({ noImage, post }: Props) {
  const target = post;

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link
            href={`/${target.User.id}`}
            className={style.postUserImage}
            onClick={stopPropagation}
          >
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`} onClick={stopPropagation}>
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
          {!noImage && (
            <div>
              <PostImages post={target} />
            </div>
          )}
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
