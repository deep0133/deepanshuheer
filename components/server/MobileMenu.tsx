"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import LogoutButton from "../client/navbar/LogoutButton";
import AddProject from "../client/navbar/AddProject";

export default function MobileMenu() {
  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const links: { path: string; pathname: string }[] = [
    {
      path: "/",
      pathname: "About",
    },
    {
      path: "/Project",
      pathname: "Project",
    },
    {
      path: "/Services",
      pathname: "Services",
    },
    {
      path: "/Contact",
      pathname: "Contact",
    },
  ];

  return (
    <div className='sm:hidden' id='mobile-menu'>
      <div className='px-8 w-full min-h-auto absolute space-y-2 pt-2 pb-4 rounded-md bg-slate-900 top-[70px] -left-5'>
        {links?.map((val, index) => {
          return (
            <motion.div
              key={index}
              variants={linkVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={val.path}
                className='text-white block border-b border-x-transparent hover:bg-gray-700 duration-200 px-3 py-2 hover:rounded-md border-gray-700 text-base font-medium'
                aria-current='page'
              >
                {val.pathname}
              </Link>
            </motion.div>
          );
        })}
        <AddProject />
        <LogoutButton />
      </div>
    </div>
  );
}
