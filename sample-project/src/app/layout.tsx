// app/layout.js
'use client'; // Client-side component

import { SessionProvider } from "next-auth/react"; 
import Header from '../header/header'
import Footer from '../footer/page'

export default function RootLayout({ children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </html>
    </SessionProvider>
  );
}