"use client";

import { useSession } from "next-auth/react";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import { useRouter } from "next/navigation";

const FollowButton = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const onClick = () => {
    if (!session?.user) {
      router.replace("/i/flow/login");
    }
  };
  return (
    <button className={style.followButton} onClickCapture={onClick}>
      팔로우
    </button>
  );
};

export default FollowButton;
