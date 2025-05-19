// app/layout.tsx

import { appWithTranslation } from 'next-i18next';
import React from 'react';
import './globals.css';

// Define the RootLayoutProps type to include children as a required prop
type RootLayoutProps = {
  children: React.ReactNode;  // This type ensures that 'children' is recognized
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

// Wrap the layout component with appWithTranslation
export default appWithTranslation(RootLayout);