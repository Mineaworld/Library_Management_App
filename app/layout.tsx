import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${IbmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
