import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NITOO",
  description: "Explore our premium selection of toilets, bath tubs, and urinary bowls at NITOO. Elevate your bathroom experience with modern designs and top-notch craftsmanship. Discover the perfect blend of style and functionality with our sanitary solutions. Shop now for excellence in hygiene and aesthetics!",
  keyword:["quality toilets", "modern bath tubs", "innovative urinary bowls"],  
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bgNitoo1`}>
        {children}          
        </body>
    </html>
  );
}
