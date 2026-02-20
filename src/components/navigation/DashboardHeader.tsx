import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  title?: string;
}

export default function DashboardHeader({
  title = "Dashboard",
}: DashboardHeaderProps) {
  return (
    <header className="bg-background sticky top-0 z-10 flex h-14 items-center gap-4 border-b px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="h-6" />
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <span className="bg-destructive absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-[10px] text-white">
            3
          </span>
        </Button>
      </div>
    </header>
  );
}
