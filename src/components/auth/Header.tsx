import { Link } from "react-router-dom";
import AuthLogo from "./AuthLogo";

export default function Header() {
  return (
    <div>
      <header className="py-3 text-white bg-[#764ba2]">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-3 md:px-6 lg-px-12">
          {/* Logo here */}
          <div>
            <AuthLogo />
          </div>
          {/* Navigation links */}
          <div className="font-medium text-[1rem] md:text-lg">
            <ul className="flex flex-row gap-7">
              <li>How it works</li>
              <li>Contact</li>
              <Link to="signin">Login</Link>
              <Link to="signup">
                <span className="cursor-pointer rounded-xl bg-black px-4 py-2 text-sm hover:bg-gray-800 md:text-base">
                  Signup
                </span>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
