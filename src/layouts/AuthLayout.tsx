import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="grow">
      <div className="sticky top-0 z-50 bg-transparent">
        {/* For header */}
      </div>
      <div className="mx-auto max-w-7xl">
        <Outlet />
      </div>
    </main>
  )
}