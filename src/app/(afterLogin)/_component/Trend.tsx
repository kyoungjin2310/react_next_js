import Link from "next/link";
import style from "./trend.module.css";
import { Hashtag } from "@/model/Hashtag";

type Prop = { trend: Hashtag };
export default function Trend({ trend }: Prop) {
  return (
    // 맞는지 확인 - console에 decodeURIComponent해서 보면됨
    <Link
      href={`/search?q=${encodeURIComponent(trend.title)}`}
      className={style.container}
    >
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{trend.title}</div>
      <div className={style.count}>{trend.count.toLocaleString()} posts</div>
    </Link>
  );
}
