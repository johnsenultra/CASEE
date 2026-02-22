import { Link } from "react-router-dom";
import AuthLogo from "./AuthLogo";
import { useState } from "react";
import { Button } from "../ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#764ba2] py-4 text-white shadow-lg">
      <nav className="lg-px-12 mx-auto flex max-w-7xl flex-wrap items-center justify-between px-3 md:px-6">
        {/* Logo here */}
        <AuthLogo />
        <div></div>
        {/* Navigation links */}
        <div className="hidden text-[1rem] font-medium md:flex md:text-lg">
          <ul className="flex flex-row gap-7">
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <Link to="signin">Login</Link>
            <Link to="signup">
              <span className="cursor-pointer rounded-full bg-black px-4 py-2 text-sm hover:bg-gray-800 md:text-base">
                Signup
              </span>
            </Link>
          </ul>
        </div>
        <Button
          className="group size-8 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          variant="ghost"
          size="icon"
        >
          <svg
            className="pointer-events-none h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
            />
          </svg>
        </Button>
      </nav>
      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 px-6 pt-4 text-base font-medium">
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <Link to="signin">
              <span className="block w-full rounded-full px-4 py-2 text-center hover:bg-gray-200 hover:text-gray-900 md:text-base">
                Login
              </span>
            </Link>
            <Link to="signup" className="w-full">
              <span className="block w-full cursor-pointer rounded-full bg-black px-4 py-2 text-center text-sm hover:bg-gray-800 md:text-base">
                Signup
              </span>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
