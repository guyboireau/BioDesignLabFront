import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from "./components/navigation/index.client";
import Carrousel from './components/ModuleCustom/carrousel/page';
import ModuleCustomLayout from './components/ModuleCustom/layout';
import FooterLayout from './components/footer/layout';
import Footer from './components/footer/page';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Bio Design Lab",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         {/* Metadata and other head elements */}
      </head>
      <Providers>
        <body >
          <Navigation />
          {children}
        </body>
      </Providers>
    </html>
  );
}
