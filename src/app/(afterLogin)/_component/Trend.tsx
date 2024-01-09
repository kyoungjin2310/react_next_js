import Link from "next/link";
import style from "./trend.module.css";

const Trend = () => {
  return (
    <Link href={"/search?q=트렌드"} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>test</div>
      <div className={style.count}>1,121 post</div>
    </Link>
  );
};

export default Trend;
