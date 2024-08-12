"use client";
import { ReactNode, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function NavComponent({ children }: { children: ReactNode }) {
  const [showHide, setShowHide] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setShowHide(false);
    }
  };

  useEffect(() => {
    if (showHide) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showHide]);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <div
      ref={menuRef}
      className='absolute inset-y-0  w-full flex items-center sm:hidden'
    >
      <div className='relative top-0 '>
        <button
          type='button'
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          aria-controls='mobile-menu'
          aria-expanded={showHide ? "true" : "false"}
          onClick={() => {
            setShowHide(!showHide);
          }}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className={showHide ? "hidden h-6 w-6" : "block h-6 w-6"}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
          <svg
            className={showHide ? "block h-6 w-6" : "hidden h-6 w-6"}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      {showHide && (
        <motion.div variants={variants} className='z-50'>
          {children}
        </motion.div>
      )}
    </div>
  );
}
