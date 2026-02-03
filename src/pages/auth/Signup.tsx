import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <main className="grow">
      <div className="flex min-h-screen">
        <div className="hidden w-1/2 items-center justify-center p-12 lg:flex">
          <div></div>
          <div></div>
          <div className="relative max-w-md">
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </blockquote>
            <p>-Jansennn</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="w-full max-w-md px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-700">
                Create an accoount
              </h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* Signup Form */}
            <SignupForm />
          </div>
        </div>
      </div>
    </main>
  );
}
