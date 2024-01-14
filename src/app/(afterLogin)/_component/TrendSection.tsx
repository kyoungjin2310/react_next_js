"use client";

import Trend from "./Trend";
import style from "./trendSection.module.css";
import { usePathname } from "next/navigation";

const TrendSection = () => {
  //path name 조회
  const pathname = usePathname();

  if (pathname === "/explore") return <Trend />;

  return (
    <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
      </div>
    </div>
  );
};

export default TrendSection;
