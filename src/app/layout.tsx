import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition  from '@/components/PageTransition'
//  Components
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400","500","600","700","800"] ,
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: "Taaha Hussain Khan",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition >
        {children}
        </PageTransition>
        </body>
    </html>
  );
}
