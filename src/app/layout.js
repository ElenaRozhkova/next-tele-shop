
import "./globals.css";
import Navbar from '@/app/components/Navbar'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex-grow px-6 md:overflow-y-auto md:px-12 py-2"> <Navbar /></div>

        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </body>
    </html>
  );
}
