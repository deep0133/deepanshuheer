"use client";
import { auth } from "@/lib/firebaseConfig";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { AuthContext } from "./projectContext";
import { userTypes } from "@/types";
interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null | userTypes>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const uid = user?.uid;
      
      localStorage.setItem("uid", uid);
      
      // @ts-ignore
      setUser({
        email: user?.email!,
        uid: user?.uid!,
      });
      router.push("/");
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const auth = getAuth();
      onAuthStateChanged(auth, (userData) => {
        if (userData) {
          setUser(userData);
        } else {
          // User is not signed in.
          // ...
          setUser(null);
        }
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, signIn, loading, error, fetchUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}
