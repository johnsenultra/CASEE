import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SigninForm() {
  return (
    <div>
      <form className="space-y-5">
        {/* Error message component handler */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Email address:
          </label>
          <Input
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            required
            className="block py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            typeof="password"
            placeholder="•••••••••"
            required
            className="block py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
          />
        </div>
        <Button
          type="submit"
          className="inline-flex w-full rounded-xl px-4 py-6 text-sm font-medium shadow-sm"
        >
          Sign in
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              Already have an account?
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Link
          to="/signup"
          className="flex w-full items-center justify-center rounded-xl border border-black py-3 text-sm font-medium shadow-sm hover:bg-gray-200"
        >
          Creat an account
        </Link>
      </div>
    </div>
  );
}
