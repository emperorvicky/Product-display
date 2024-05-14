import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "./components/toastContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nitoo",
  description: "admin page",
  icons:{
    icon:[
      'favicon.ico?v=4'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-bgNitoo1`}>
        <ToastProvider>
         {children} 
        </ToastProvider>
        
        </body>
    </html>
  );
}
