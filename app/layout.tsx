import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";

const IbmPlexSans = localFont({
  src: [
    {
      path: "/fonts/IbmPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/IbmPlexSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/IbmPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/IbmPlexSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const bebasNeue = localFont({
  src: [
    {
      path: "/fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--bebasNeue",
});

export const metadata: Metadata = {
  title: "Library Application",
  description: "Online Library Application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${IbmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
