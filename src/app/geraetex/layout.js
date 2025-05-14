import { Geist, Geist_Mono } from "next/font/google";
import SideNav from '@/app/ui/menu/side-nav';



export default function Layout({ children }) {
  return (

    <div className="container flex mx-auto h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow  md:overflow-y-auto md:px-12">{children}</div>
    </div>

  );
}
