"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/projectContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import Link from "next/link";
export default function AddProject() {
  const { user, setUser } = useContext(AuthContext)!;

  const logoutHandler = async () => {
    localStorage.removeItem("uid");
    await signOut(auth);
    setUser(null);
  };
  return (
    user && (
      <Link
        href={"/AddProject"}
        className='text-typography hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        Add Project
      </Link>
    )
  );
}
