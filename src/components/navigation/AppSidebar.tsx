import { NavLink, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Calendar,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  ClipboardList,
  Bell,
} from "lucide-react";
import { useAuth } from "@/context/AuthProvider";

const mainNavItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Appointments",
    url: "/dashboard/appointments",
    icon: Calendar,
  },
  {
    title: "Students",
    url: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    title: "Counselors",
    url: "/dashboard/counselors",
    icon: Users,
  },
];

const managementNavItems = [
  {
    title: "Schedule",
    url: "/dashboard/schedule",
    icon: ClipboardList,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const { signout, session } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signout();
    navigate("/signin");
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-sidebar-border border-b">
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg">
            <GraduationCap className="size-5" />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-semibold">CSAE</span>
            <span className="text-muted-foreground text-xs">
              Scheduling System
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent font-medium" : ""
                      }
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent font-medium" : ""
                      }
                    >
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-sidebar-border border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign Out"
              onClick={handleSignOut}
              className="text-destructive hover:bg-destructive/10"
            >
              <LogOut className="size-4" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {session?.user && (
          <div className="flex items-center gap-2 px-2 py-2 group-data-[collapsible=icon]:hidden">
            <div className="bg-muted flex size-8 items-center justify-center rounded-full">
              <span className="text-xs font-medium">
                {session.user.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-medium">
                {session.user.user_metadata.first_name}
              </span>
              <span className="text-muted-foreground truncate text-xs">
                {session.user.email}
              </span>
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
