'use client';

import Navabar from './navbar/navabar'
import CategoriesNav from './navbar/categoriesNav'
import { SessionProvider } from "next-auth/react";
import './globals.css'

export default function RootLayout({children}:{children: React.ReactNode}) 
{
  return (
    <SessionProvider>
    <html lang="en">
      <body>
        <Navabar/>
        <CategoriesNav/>
        {children}
      </body>
    </html>
    </SessionProvider>
  );
}