import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <img
          src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
          alt="logo"
        />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="i/flow/signup" className={styles.signup}>
          계정 가입하기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
