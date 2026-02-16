import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { supabase } from "@/utils/supabase";

type signinFormType = {
  email: string;
  password: string;
};

export default function SigninForm() {
  const [signinForm, setSigninForm] = useState<signinFormType>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Event handler for input changes
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: signinForm.email,
        password: signinForm.password,
      });
      if (error) throw error;

      // use cases test
      console.log("User sign in", data.user);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Error message component handler */}
        <div>
          <label
            htmlFor="email"
            className="mb-1 inline-block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            required
            className="py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
            value={signinForm.email}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-1 inline-block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            name="password"
            type="password"
            placeholder="•••••••••"
            required
            className="py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
            value={signinForm.password}
            onChange={handleChangeInput}
          />
        </div>
        <Button
          type="submit"
          className="inline-flex w-full rounded-xl px-4 py-6 text-sm font-medium shadow-sm"
          disabled={isLoading}
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
          className="group flex w-full items-center justify-center rounded-xl border border-black py-3 text-sm font-medium shadow-sm hover:bg-gray-200"
        >
          Creat an account
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            className="ms-4 transform transition-all duration-300 ease-out group-hover:translate-x-2 group-hover:opacity-80"
          >
            <path d="M17 12L7 12M17 12L13 16M17 12L13 8"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
