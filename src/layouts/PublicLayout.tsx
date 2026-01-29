import Header from "@/components/auth/Header";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      <Header />
      <Outlet />      
    </div>
  )
}
