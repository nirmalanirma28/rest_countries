import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>


    // <ThemeProvider defaultTheme="light">
    //   <html lang="en">
    //     <body className={inter.className}>
    //       {/* <Navbar /> */}
    //       {children}
    //     </body>
    //   </html>
    // </ThemeProvider>

    <html lang="en" suppressHydrationWarning>
    <body>
      <Providers>
          {children}
      </Providers>
    </body>
  </html>
  );
}
