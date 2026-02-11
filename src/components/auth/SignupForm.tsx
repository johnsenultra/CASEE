import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { supabase } from "@/utils/supabase";

type signupFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [errors, setErrors] = useState<FormErrors>({})
  const [signupForm, setSignupForm] = useState<signupFormType>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Event handler for input changes
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Call API here
    try {
      const { data, error } = await supabase.auth.signUp({
        email: signupForm.email,
        password: signupForm.password,
        options: {
          data: {
            first_name: signupForm.firstName,
            last_name: signupForm.lastName,
          },
        },
      });

      if (error) throw error;

      // test cases log the user details
      console.log("User created", data.user);
      alert("Check your email to confirm your account");
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
        <div>{/* Error message component handler */}</div>
        <p>{signupForm.firstName}</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="mb-1 inline-block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <Input
              name="firstName"
              type="text"
              placeholder="John"
              required
              className="py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              value={signupForm.firstName}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-1 inline-block text-sm font-medium text-gray-700"
            >
              Last Name:
            </label>
            <Input
              name="lastName"
              type="text"
              placeholder="Doe"
              required
              className="py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
              value={signupForm.lastName}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1 inline-block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <Input
            name="email"
            type="email"
            placeholder="johndoe@example.com"
            required
            className="py-6 shadow-sm focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
            value={signupForm.email}
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
            value={signupForm.password}
            onChange={handleChangeInput}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full rounded-xl px-4 py-6 text-sm font-medium shadow-sm"
        >
          {isLoading ? "Creating account..." : "Create account"}
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
          to="/signin"
          className="group flex w-full items-center justify-center rounded-xl border border-black px-4 py-3 text-sm font-medium shadow-sm hover:bg-gray-200"
        >
          Sign in instead
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
