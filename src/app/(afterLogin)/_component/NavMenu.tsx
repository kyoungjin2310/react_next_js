"use client";

import { useSelectedLayoutSegment } from "next/navigation";

const NavMenu = () => {
  //호출된 레이아웃보다 한단계 아래 폴더(현재 라우터 아는방법)
  const segment = useSelectedLayoutSegment();

  //그 아래 세부폴더까지 알려면(현재 라우터 아는 방법)
  //const segments = useSelectedLayoutSegments()
  return <div></div>;
};

export default NavMenu;
