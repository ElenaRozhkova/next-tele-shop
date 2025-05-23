
import "./globals.css";
import Navbar from '@/app/components/Navbar'
import TestNavbar from '@/app/components/TestNavbar'
import SideNav from '@/app/ui/menu/side-nav';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <div className="flex-grow container mx-auto md:overflow-y-auto  sm:py-2 px-0"> <Navbar /></div>
        <div className="container flex mx-auto h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow  md:overflow-y-auto md:px-12">{children}</div>
        </div>

      </body>
    </html>
  );
}
