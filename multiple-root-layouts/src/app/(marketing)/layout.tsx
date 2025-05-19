export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{backgroundColor:'lightblue',padding:'20px'}}> header</header>
        {children}
        <footer style={{backgroundColor:'lightblue',padding:'20px'}}> footer</footer>
      </body>
    </html>
  );
}
