import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue-Tracker",
  description: "Issue Tracker nextjs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="violet">
          <NavBar />
          <Container>
            <main className="p-5">{children}</main>
          </Container>
        </Theme>
      </body>
    </html>
  );
}
