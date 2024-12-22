import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Chatter",
  description: "Chatter is a messaging or chatting app.",
  icons: {
    icon: "/favicon.ico?v=4", // Single icon can be provided as a string
    apple: "/apple-touch-icon.png?v=4", // Same applies here
    shortcut: "/apple-touch-icon.png?v=4", // Ensure proper usage
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
     <SessionProvider>

      <body className="md:flex bg-slate-900  h-screen m-0 p-0">
      <Navbar />
      <div className="w-[calc(100vw-80px)] h-screen">
        {children}

      </div>
      
      </body>

     </SessionProvider>
      
      
    </html>
  );
}
