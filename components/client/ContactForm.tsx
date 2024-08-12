"use client";
import { ContactInputTypes } from "@/types";
import React, { useState } from "react";

export default function ContactForm() {
  const [details, setDetails] = useState<ContactInputTypes>({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className='grid grid-cols-1 gap-y-6' onSubmit={submitHandler}>
      <div>
        <label htmlFor='full-name' className='sr-only'>
          Full name
        </label>
        <input
          type='text'
          name='name'
          className='block w-full bg-slate-800/60 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
          placeholder='Full name'
          onChange={onChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input
          name='email'
          type='email'
          className='block w-full bg-slate-800/60 shadow-sm py-3 px-4 placeholder-gray-500 outline-none rounded-md'
          placeholder='Email'
          onChange={onChangeHandler}
          required
        />
      </div>
      <div>
        <label htmlFor='message' className='sr-only'>
          Message
        </label>
        <textarea
          name='message'
          rows={4}
          className='block w-full bg-slate-800/60 shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md'
          placeholder='Message'
          onChange={(e: any) => {
            setDetails((prev) => {
              return { ...prev, message: e.target.value };
            });
          }}
          required
        ></textarea>
      </div>
      <div>
        <button
          type='submit'
          className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
