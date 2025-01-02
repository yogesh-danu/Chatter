import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Chatter",
  description: "Chatter is a messaging or chatting app.",
  icons: {
    icon: "/favicon.ico?v=4", 
    apple: "/apple-touch-icon.png?v=4", 
    shortcut: "/apple-touch-icon.png?v=4", 
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

      <body  className="md:flex bg-slate-900  h-screen m-0 p-0 overflow-hidden ">
       
      
      <div >
        {children}

      </div>
      
      </body>

     </SessionProvider>
      
      
    </html>
  );
}
