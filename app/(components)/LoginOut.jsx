"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";
function LoginOut() {
  const router = useRouter();
  const onSignOut = () => {
    signOut();
    router.replace("/");
  };
  return (
    <button
      onClick={() => signOut()}
      className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
    >
      Log Out
    </button>
  );
}

export default LoginOut;
