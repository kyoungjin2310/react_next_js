"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    user: {
      email: "",
      name: "",
      //이미지 - public 폴더에 넣고 절대경로 지정
      image: "/next.svg",
    },
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
