"use client";

import { useSession } from "next-auth/react";
import Trend from "./Trend";
import style from "./trendSection.module.css";
import { usePathname } from "next/navigation";

const TrendSection = () => {
  //path name 조회
  const pathname = usePathname();
  const { data: session } = useSession();
  if (pathname === "/explore") return <Trend />;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          <Trend />
        </div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
};

export default TrendSection;
