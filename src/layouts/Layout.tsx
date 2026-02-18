import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import AppSidebar from "@/components/navigation/AppSidebar";
import DashboardHeader from "@/components/navigation/DashboardHeader";

const pageTitles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/dashboard/appointments": "Appointments",
  "/dashboard/students": "Students",
  "/dashboard/counselors": "Counselors",
  "/dashboard/schedule": "Schedule",
  "/dashboard/notifications": "Notifications",
  "/dashboard/settings": "Settings",
};

export default function Layout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader title={title} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
