import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/AuthProvider";
import type React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: {children: React.JSX.Element}) {
  const { session, loading } = useAuth();

  if(loading) {
    return (
      // show loading skeleton while checking auth status
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-12 w-62.5" />
          <Skeleton className="h-12 w-50" />
        </div>
      </div>
    )
  }

  // If logged in, redirect user away from signin/signup pages
  if(session) {
    return (
      <Navigate to={"/"} />
    )
  }

  return <div>{children}</div>
}