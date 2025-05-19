"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const navLinks=[
      {name:"Register",link:"/register"},
      {name:"Login",link:"/login"},
      {name:"Forgot Password",link:"/forgot-password"},
    ]
    const pathname=usePathname();
    return (
      <html lang="en">
        <body>
          <nav>
            {navLinks.map((item)=>{
              const isActive=pathname==item.link;
              return(<li key={item.name}>
                <Link href={item.link} className={isActive?"text-blue-500 font-bold":""}>{item.name}</Link></li>
              )
            })}
          </nav>
          {children}
          <footer style={{backgroundColor:'lightblue',padding:'20px'}}> footer</footer>
        </body>
      </html>
    );
  }
  