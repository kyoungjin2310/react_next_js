import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div>Not Found</div>
      <Link href="/home">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFound;
