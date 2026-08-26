"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex h-[68px] w-full items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-10">
      <div className="flex items-center justify-center gap-2.5">
        <img
          className="h-8 w-8 object-contain"
          src="./assets/images/feedback-logo.svg"
          alt="Logo"
        />

        <h1 className="text-base font-semibold text-slate-800 sm:text-lg">
          Tech Pioneers
        </h1>
      </div>

      <div className="hidden items-center gap-6 sm:flex md:gap-8">
        <Link
          className="text-sm font-medium text-blue-600 md:text-[15px]"
          href="/"
        >
          Home
        </Link>

        <Link
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 md:text-[15px]"
          href="/feedback"
        >
          Feedback
        </Link>

        <Link
          className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600 md:text-[15px]"
          href="/about"
        >
          About
        </Link>
      </div>

      <Link href="/submit-feedback" className="hidden sm:block">
        <button className="cursor-pointer rounded-md bg-blue-600 px-3.5 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md sm:px-4 md:px-5 sm:text-sm">
          Submit Feedback
        </button>
      </Link>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition-all duration-200 hover:bg-slate-100 active:scale-95 sm:hidden"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span
          className={`text-xl transition-transform duration-300 ease-out ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? "✕" : "☰"}
        </span>
      </button>

      <div
        className={`absolute left-0 top-[68px] z-50 w-full border-b border-slate-200 bg-white px-4 py-4 shadow-md transition-all duration-300 ease-out sm:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-3 text-sm font-medium text-blue-600 transition-colors duration-200 hover:bg-slate-50"
          >
            Home
          </Link>

          <Link
            href="/feedback"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
          >
            Feedback
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
          >
            About
          </Link>

          <Link
            href="/submit-feedback"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-md bg-blue-600 px-3 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-md"
          >
            Submit Feedback
          </Link>
        </div>
      </div>
    </div>
  );
};
