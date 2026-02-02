import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/AuthProvider";
import type React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({
  children,
}: {
  children: React.JSX.Element;
}) {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="item-center flex space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[62.5]" />
          <Skeleton className="h-4 w-[50]" />
        </div>
      </div>
    );
  }

  // if not logged in, redirect to signin
  if (!session) {
    return <Navigate to={"/auth/signin"} replace />;
  }

  // if logged in rended the children
  return <div>{children}</div>;
}
