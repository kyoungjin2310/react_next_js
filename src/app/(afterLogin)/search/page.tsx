import style from "./search.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = {
  searchParams: { q: string };
};

//query - props안에 있음
export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
      </div>
      <div className={style.list}>
        <Post />
      </div>
    </main>
  );
}
