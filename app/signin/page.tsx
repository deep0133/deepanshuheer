"use client";

import { AuthContext } from "@/context/projectContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const { signIn, error, loading, user } = useContext(AuthContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  if (user) {
    return null; // Optionally render a loading spinner or nothing while redirecting
  }

  return (
    <>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-typography text-center text-3xl font-extrabold'>
            <span className='text-buttons'> Sign in</span> to your account
          </h2>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-slate-800/50 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form
              className='space-y-6'
              onSubmit={(e) => {
                e.preventDefault();
                signIn(email, password);
              }}
            >
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='appearance-none block w-full px-3 py-2 bg-slate-800/60 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-buttons focus:border-buttons sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  {" "}
                  Password{" "}
                </label>
                <div className='mt-1'>
                  <input
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    required
                    className='appearance-none bg-slate-800/60 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-buttons focus:border-buttons sm:text-sm'
                  />
                  <span className='block mt-1 text-xs text-yellow-500'>
                    {error && "EERROR_: " + error}
                  </span>
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  disabled={loading}
                  style={{
                    background: loading ? "#3b82f6" : "#4f46e5",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-buttons'
                >
                  {loading ? "Processing..." : "Sign in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
