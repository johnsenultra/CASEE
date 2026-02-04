import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="grow">
      <div className="mx-auto mt-30 max-w-screen px-10 text-center">
        <div className="space-y-6 text-5xl font-medium tracking-tight sm:text-5xl md:text-[80px]">
          <h1 className="">
            Entrance Exam <br />
            Scheduling Made Simple
          </h1>
        </div>
        <p className="px- mt-15 font-medium text-gray-500 sm:text-lg md:text-xl">
          Book your appointment in minutes with our automated scheduling system
        </p>
      </div>

      <section className="mx-auto mt-12 mb-50 max-w-5xl">
        <div className="mx-auto flex max-w-180 flex-col justify-center gap-4 px-5 md:flex-row">
          <Link to="#">
            <Button className="w-full transform rounded border border-gray-900 bg-black px-4 py-5 text-sm font-bold text-white transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-gray-900 hover:bg-gray-900 hover:shadow-2xl focus:border-black focus:ring-black focus:outline-none active:translate-y-0 md:w-40">
              Schedule Now
            </Button>
          </Link>
          <Link to="#">
            <Button className="hover:scale[1.02] w-full transform rounded border border-gray-900 bg-transparent px-4 py-5 text-sm font-bold text-black transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gray-800 hover:bg-gray-200 hover:text-gray-800 hover:shadow-2xl focus:border-black focus:ring-black focus:outline-none active:translate-y-0 md:w-40">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      <section id="how-it-works" className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
          }}
        >
          <div className="mx-auto mt-7 max-w-5xl px-4 text-white">
            <div className="text-center text-4xl font-bold">
              <h1>How It Works</h1>
            </div>
            <div className="mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-[#764ba2]/20 bg-[#764ba2]/10 p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#764ba2]/50 hover:bg-[#764ba2]/20">
                <p>📚️</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-[#764ba2]/20 bg-[#764ba2]/10 p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#764ba2]/50 hover:bg-[#764ba2]/20">
                <p>📅</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col items-center rounded-xl border border-[#764ba2]/20 bg-[#764ba2]/10 p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-[#764ba2]/50 hover:bg-[#764ba2]/20">
                <p>🎖️</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
