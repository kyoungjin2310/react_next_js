import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.left}>
        <img
          src="https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg"
          alt="logo"
        />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
      </div>
    </main>
  );
}
