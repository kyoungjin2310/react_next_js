import style from "./post.module.css";
import Link from "next/link";

type Props = {
  noImage?: boolean;
};
export default function Post({ noImage }: Props) {
  const target = {
    User: {
      id: "",
      image: "",
      nickname: "",
    },
    content: "",
  };
  return (
    <div>
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
          </div>
          <div>{target.content}</div>
        </div>
      </div>
    </div>
  );
}
